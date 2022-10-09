import { Nav } from '../../../core/components/Nav'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import { IconifyIcon } from '../../../core/components/IconifyIcon'
import ActivityCard from '../ActivityCard'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { getMyActivities } from '../../api/getMyActivities'
import { useEffectOnce } from 'react-use'
import LoadingSpinner from '../../../core/components/LoadingSpinner'
import { useRouter } from 'next/router'
import { pagePath } from '../../../core/utils/pagePath'
import { EachActvity } from '../../../core/sync-with-backend/dto/activity/dto/finAll.dto'

const MyActivityPageContent = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const [createdActivities, setCreatedActivities] = useState<
    EachActvity[] | []
  >([])
  const [joinedActivities, setJoinedActivities] = useState<EachActvity[] | []>(
    []
  )

  const { mutate: fetchMyActivitiesMutate } = useMutation(getMyActivities, {
    onSuccess: (fetchedActivities) => {
      // setInterests(fetchedInterests.interests)
      // setIsLoading(false)

      //mock check loading
      setTimeout(function () {
        setCreatedActivities(fetchedActivities.createdActivities)
        setJoinedActivities(fetchedActivities.joinedActivities)
        setIsLoading(false)
      }, 1000)
    },
    onError: (error) => {
      console.error(error)
      setIsLoading(false)
    },
  })

  const onSort = () => {
    setCreatedActivities((prev) => {
      const reverse = prev.slice().reverse()
      return reverse
    })
    setJoinedActivities((prev) => {
      const reverse = prev.slice().reverse()
      return reverse
    })
  }

  const fecthMyActivities = () => {
    setIsLoading(true)
    fetchMyActivitiesMutate()
  }

  useEffect(() => {
    if (!isLoading) {
      fecthMyActivities()
    }
  }, [])

  return (
    <div className="flex h-screen flex-col">
      <Nav />
      <div className="flex h-full flex-col gap-y-[5px] px-5 pt-[25px] pb-5">
        <Tab.Group>
          <Tab.List className="flex gap-x-[10px] rounded-[10px] bg-slate-400 p-1">
            <Tab
              key={'Created Activity'}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-[10px] py-2.5 text-sm leading-5 text-sky-500',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Created Activity
            </Tab>
            <Tab
              key={'Joined Activity'}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-[10px] py-2.5 text-sm font-medium leading-5 text-sky-500',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Joined Activity
            </Tab>
          </Tab.List>
          <div className="flex flex-row justify-end gap-x-4 px-[5px]">
            <IconifyIcon icon="sort" onClick={onSort} />
          </div>
          {isLoading && (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <LoadingSpinner />
            </div>
          )}
          {!isLoading && (
            <Tab.Panels>
              <Tab.Panel className="flex flex-col gap-y-3">
                {createdActivities.map((activityItem) => (
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
                ))}
              </Tab.Panel>
              <Tab.Panel className="flex flex-col gap-y-3">
                {joinedActivities.map((activityItem) => (
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
                ))}
              </Tab.Panel>
            </Tab.Panels>
          )}
        </Tab.Group>
      </div>
    </div>
  )
}

export default MyActivityPageContent
