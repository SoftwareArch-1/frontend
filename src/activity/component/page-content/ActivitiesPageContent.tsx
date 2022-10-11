import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useState } from 'react'
import FloatingActionButton from '../../../core/components/FloatingActionButton'
import { IconifyIcon } from '../../../core/components/IconifyIcon'
import LoadingSpinner from '../../../core/components/LoadingSpinner'
import { Modal } from '../../../core/components/Modal'
import { Nav } from '../../../core/components/Nav'
import SearchBar from '../../../core/components/SearchBar'
import { EachActvity } from '../../../core/sync-with-backend/dto/activity/dto/finAll.dto'
import { pagePath } from '../../../core/utils/pagePath'
import { getActivities } from '../../api/getActivities'
import ActivityCard from '../ActivityCard'
import InterestModalContent from '../InterestModalContent'

const ActivitiesPageContent = () => {
  const router = useRouter()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState<string[]>([])
  const [search, setSearch] = useState<string>('')
  const [activities, setActivities] = useState<EachActvity[] | []>([])

  const { isLoading } = useQuery(['fetchActivities'], getActivities, {
    onSuccess: (data) => {
      setActivities(data)
    },
  })

  const onSort = () => {
    setActivities((prev) => {
      const reverse = prev.slice().reverse()
      return reverse
    })
  }

  const onFilter = (filterArray: string[]) => {
    setFilter(filterArray)
    setIsModalOpen(false)
  }

  const onSearch = (searchText: string) => {
    setSearch(searchText)
  }

  const activitiesFilterd = activities.filter((activityItem) => {
    if (filter.length === 0 && search === '') {
      return true
    } else if (filter.length === 0 && search !== '') {
      return activityItem.name.includes(search)
    } else {
      return (
        activityItem.name.includes(search) && filter.includes(activityItem.tag)
      )
    }
  })

  const activitiesList = activitiesFilterd.map((activityItem) => (
    <ActivityCard
      currentParticipant={activityItem.joinedUserIds.length}
      date={dayjs(activityItem.targetDate).format(
        // ex 01 Jan 2000
        'DD/MM/YYYY'
      )}
      description={activityItem.description}
      maxParticipant={activityItem.maxParticipants}
      location={activityItem.location}
      tag={activityItem.tag}
      title={activityItem.name}
      key={activityItem.id}
      onClick={() => {
        router.push(pagePath.ActivityDetailPage(activityItem.id))
      }}
    />
  ))

  return (
    <div className="flex h-screen flex-col">
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <InterestModalContent
          initInterest={filter}
          onFilter={onFilter}
          multipleSelect
        />
      </Modal>
      <Nav />
      <div className="flex h-full flex-col gap-y-3 px-5 pt-[25px] pb-5">
        <div className="flex w-full flex-row items-center gap-x-2.5">
          <div className="w-full">
            <SearchBar onSearch={onSearch} placeHolder="Search Activity" />
          </div>
          <IconifyIcon icon="filter" onClick={() => setIsModalOpen(true)} />
          <IconifyIcon icon="sort" onClick={onSort} />
        </div>
        {isLoading && (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && (
          <div className="flex flex-col gap-y-3 pb-5">{activitiesList}</div>
        )}
      </div>
      <FloatingActionButton
        className="bg-sky-500"
        onClick={() => {
          console.log('Go to create Activity page')
          router.push(pagePath.CreateActivityPage())
        }}
      >
        <IconifyIcon icon="plus" className="h-7 w-7 text-white" />
      </FloatingActionButton>
    </div>
  )
}

export default ActivitiesPageContent
