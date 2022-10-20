import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { Nav } from '../../../core/components/Nav'
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
import BottomNavigation from '../../../core/components/ButtomNavigation'
import Head from 'next/head'

const ActivityPageContent = () => {
  const router = useRouter()
  const { id } = router.query

  const userId = useUserStore((s) => s.id)

  const [activityDetail, setActivityDetail] = useState<FindOneActivity>()

  const { mutate: joinActivityMutate } = useMutation(joinActivity, {
    onSuccess: (data) => {
      refetchActivity()
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const onJoin = () => {
    joinActivityMutate({
      activityId: String(id),
      joinerId: userId!,
    })
  }

  const { mutate: acceptParticipantMutate } = useMutation(acceptParticipant, {
    onSuccess: (data) => {
      refetchActivity()
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
      refetchActivity()
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
      enabled: !!id,
    }
  )

  return (
    <>
      <Nav backButtonEnable />
      <Head>
        <title>{activityDetail?.name ?? 'Activity'}</title>
      </Head>
      <div className="flex flex-col gap-y-5 px-5 py-5">
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
                activityDetail.status === 'not-joined'
                  ? 'Join'
                  : activityDetail.status === 'pending'
                  ? 'Pending'
                  : 'Chat'
              }
              location={activityDetail.location}
              onClick={
                activityDetail.status === 'not-joined'
                  ? onJoin
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
      <BottomNavigation />
    </>
  )
}

export default ActivityPageContent
