import { useMutation } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useEffectOnce } from 'react-use'
import FloatingActionButton from '../../../core/components/FloatingActionButton'
import { IconifyIcon } from '../../../core/components/IconifyIcon'
import LoadingSpinner from '../../../core/components/LoadingSpinner'
import { Modal } from '../../../core/components/Modal'
import { Nav } from '../../../core/components/Nav'
import SearchBar from '../../../core/components/SearchBar'
import { pagePath } from '../../../core/utils/pagePath'
import { activityListDetailDto } from '../../../core/sync-with-backend/dto/activity/activityListDetailDto'
import { getActivities } from '../../api/getActivities'
import ActivityCard from '../ActivityCard'
import InterestModalContent from '../InterestModalContent'

const ActivityPageContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [allActivities, setAllActivities] = useState<
    activityListDetailDto[] | []
  >([])
  const [activities, setActivities] = useState<activityListDetailDto[] | []>([])

  const { mutate: fetchActivitiesMutate } = useMutation(getActivities, {
    onSuccess: (fetchedActivities) => {
      // setInterests(fetchedInterests.interests)
      // setIsLoading(false)

      //mock check loading
      setTimeout(function () {
        setActivities(fetchedActivities.activities)
        setAllActivities(fetchedActivities.activities)
        setIsLoading(false)
      }, 1000)
    },
    onError: (error) => {
      console.error(error)
      setIsLoading(false)
    },
  })

  const fetchActivities = () => {
    console.log('fecth')
    setIsLoading(true)
    fetchActivitiesMutate()
  }

  useEffect(() => {
    if (!isLoading) {
      fetchActivities()
    }
  }, [])

  const onSort = () => {
    setActivities((prev) => {
      const reverse = prev.slice().reverse()
      return reverse
    })
  }

  const router = useRouter()

  const onFilter = (filterArray: string[]) => {
    setFilter(filterArray)
    if (filterArray.length === 0) {
      setActivities(allActivities)
      setIsModalOpen(false)
    } else {
      const result = allActivities.filter((activity) =>
        filterArray.includes(activity.tag)
      )
      setActivities(result)
      setIsModalOpen(false)
    }
  }

  const activitiesList = activities.map((activityItem) => (
    <ActivityCard
      currentParticipant={activityItem.currentParticipant}
      date={dayjs(activityItem.date).format(
        // ex 01 Jan 2000
        'DD/MM/YYYY'
      )}
      description={activityItem.description}
      maxParticipant={activityItem.maxParticipant}
      location={activityItem.location}
      tag={activityItem.tag}
      title={activityItem.title}
      key={activityItem.title}
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
            <SearchBar
              onSearch={(data) => console.log(data)}
              placeHolder="Search Activity"
            />
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
          //router.push(pagePath.CreateActivityPage())
        }}
      >
        <IconifyIcon icon="plus" className="h-7 w-7 text-white" />
      </FloatingActionButton>
    </div>
  )
}

export default ActivityPageContent
