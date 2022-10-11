import dayjs from 'dayjs'
import { useRouter } from 'next/router'
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
import { useMutation, useQuery } from '@tanstack/react-query'
import { useUserStore } from '../../../user/userStore'
import { joinActivity } from '../../api/joinActivity'
import { acceptParticipant } from '../../api/acceptParticipant'
import { rejectParticipant } from '../../api/rejectParticipant'
import { FindOneActivity } from '../../../core/sync-with-backend/dto/activity/dto/findOne.dto'
import { useState } from 'react'

const ActivityPageContent = () => {
  const router = useRouter()
  const { id } = router.query

  const { id: userId } = useUserStore(({ id }) => ({
    id,
  }))

  const [activityDetail, setActivityDetail] = useState<FindOneActivity>()

  const { mutate: joinActivityMutate } = useMutation(joinActivity, {
    onSuccess: (data) => {
      setActivityDetail(data)
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const { mutate: acceptParticipantMutate } = useMutation(acceptParticipant, {
    onSuccess: (data) => {
      setActivityDetail(data)
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const onAccept = (joinedId: string) => {
    acceptParticipantMutate({
      activityId: String(id),
      joinerId: joinedId,
    })
  }

  const { mutate: rejectParticipantMutate } = useMutation(rejectParticipant, {
    onSuccess: (data) => {
      setActivityDetail(data)
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const onReject = (joinedId: string) => {
    rejectParticipantMutate({
      activityId: String(id),
      joinerId: joinedId,
    })
  }

  const { refetch: refetchActivity } = useQuery(
    ['getActivity'],
    () => getActivity(String(id)),
    {
      onSuccess: (data) => {
        setActivityDetail(data)
      },
    }
  )

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
              currentParticipant={activityDetail.joinedUsers.length}
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
                activityDetail.status === 'not-joined'
                  ? () => {}
                  : activityDetail.status === 'pending'
                  ? () => {}
                  : () => {}
              }
            />
            {activityDetail.status !== 'owned' && (
              <ParticipantList participant={activityDetail.joinedUsers} />
            )}
            {activityDetail.status == 'owned' && (
              <ParticipantListTabs
                participant={activityDetail.joinedUsers}
                pending={activityDetail.pendingUsers ?? []}
                onAccept={onAccept}
                onReject={onReject}
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
