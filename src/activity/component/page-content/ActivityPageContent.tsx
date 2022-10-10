import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Nav } from '../../../core/components/Nav'
import SearchBar from '../../../core/components/SearchBar'
import { pagePath } from '../../../core/utils/pagePath'
import { getActivities } from '../../api/getActivities'
import ActivityCard from '../ActivityCard'
import InterestModalContent from '../InterestModalContent'
import { getActivity } from '../../api/getActivity'
import ActivityDetailCard from '../ActivityDetailCard'
import ParticipantList from '../ParticipantList'
import ParticipantListTabs from '../ParticipantListTabs'
import { useMutation } from '@tanstack/react-query'
import { FindOneActivity } from '../../../core/sync-with-backend/dto/activity/dto/findOne.dto'
import { useUserStore } from '../../../user/userStore'
import { joinActivity } from '../../api/joinActivity'
import { updateParticipant } from '../../api/updateParticipant'
import { updateParticipantDtoSchema } from '../../../core/sync-with-backend/dto/activity/dto/updateParticipantDto'

const ActivityPageContent = () => {
  const router = useRouter()
  const { id } = router.query

  const { id: userId } = useUserStore(({ id }) => ({
    id,
  }))

  const [activityDetail, setActivityDetail] = useState<
    FindOneActivity | undefined
  >()

  const [isLoading, setIsLoading] = useState(false)

  const { mutate: joinActivityMutate } = useMutation(joinActivity, {
    onSuccess: () => {
      fecthActivityDetail()
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const { mutate: updateParticipantMutate } = useMutation(updateParticipant, {
    onSuccess: () => {
      fecthActivityDetail()
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const onUpdateParticipant = (userId: string, accept: boolean) => {
    const data = updateParticipantDtoSchema.parse({
      activityId: id,
      userId,
      accept,
    })
    console.log(data)
  }

  const { mutate: fetchActivityDetailMutate } = useMutation(getActivity, {
    onSuccess: (fetchedActivities) => {
      setTimeout(function () {
        setActivityDetail(fetchedActivities)
        setIsLoading(false)
      }, 1000)
    },
    onError: (error) => {
      console.error(error)
      setIsLoading(false)
    },
  })

  const fecthActivityDetail = () => {
    setIsLoading(true)
    fetchActivityDetailMutate(String(id))
  }

  useEffect(() => {
    if (!isLoading) {
      fecthActivityDetail()
    }
  }, [])

  const onSort = () => {
    // setActivities((prev) => {
    //   const reverse = prev.slice().reverse()
    //   return reverse
    // })
  }

  // const onFilter = (filterArray: string[]) => {
  //   setFilter(filterArray)
  //   if (filterArray.length === 0) {
  //     setActivities(allActivities)
  //     setIsModalOpen(false)
  //   } else {
  //     const result = allActivities.filter((activity) =>
  //       filterArray.includes(activity.tag)
  //     )
  //     setActivities(result)
  //     setIsModalOpen(false)
  //   }
  // }

  // const activitiesList = activities.map((activityItem) => (
  //   <ActivityCard
  //     currentParticipant={activityItem.currentParticipant}
  //     date={dayjs(activityItem.date).format(
  //       // ex 01 Jan 2000
  //       'DD/MM/YYYY'
  //     )}
  //     description={activityItem.description}
  //     maxParticipant={activityItem.maxParticipant}
  //     location={activityItem.location}
  //     tag={activityItem.tag}
  //     title={activityItem.title}
  //     key={activityItem.id}
  //     onClick={() => {
  //       router.push(pagePath.ActivityDetailPage(activityItem.id))
  //     }}
  //   />
  // ))

  return (
    <>
      <Nav />
      <div className="flex flex-col gap-y-5 px-3 py-5">
        {activityDetail && (
          <>
            <ActivityDetailCard
              name={activityDetail.ownerName}
              title={activityDetail.name}
              currentParticipant={activityDetail.joinedUsers.length + 1}
              maxParticipant={activityDetail.maxParticipants}
              date={dayjs(activityDetail.targetDate).format(
                // ex 01 Jan 2000
                'DD/MM/YYYY'
              )}
              tag={activityDetail.tag}
              description={activityDetail.description}
              buttonText={
                activityDetail.joinedUserIds.includes(userId ?? '')
                  ? 'Chat'
                  : 'Join'
              }
              location={activityDetail.location}
              onClick={
                activityDetail.joinedUserIds.includes(userId ?? '')
                  ? () => {}
                  : () => joinActivityMutate(String(id))
              }
            />
            {!activityDetail.isOwner && (
              <ParticipantList participant={activityDetail.joinedUsers} />
            )}
            {activityDetail.isOwner && (
              <ParticipantListTabs
                participant={activityDetail.joinedUsers}
                pending={activityDetail.pendingUsers ?? []}
                onUpdateParticipant={onUpdateParticipant}
              />
            )}
          </>
        )}
      </div>
      {/* <FloatingActionButton
        className="bg-sky-500"
        onClick={() => {
          console.log('Go to create Activity page')
          router.push(pagePath.CreateActivityPage())
          //router.push(pagePath.CreateActivityPage())
        }}
      >
        <IconifyIcon icon="plus" className="h-7 w-7 text-white" />
      </FloatingActionButton> */}
    </>
  )
}

export default ActivityPageContent
