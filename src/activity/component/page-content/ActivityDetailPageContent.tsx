import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Nav } from '../../../core/components/Nav'
import { ParticipantDto } from '../../../core/sync-with-backend/dto/activity/participantDto'
import { PendingDto } from '../../../core/sync-with-backend/dto/activity/pendingDto'
import { getActivity } from '../../api/getActivity'
import ActivityDetailCard from '../ActivityDetailCard'
import ParticipantList from '../ParticipantList'
import ParticipantListTabs from '../ParticipantListTabs'
import { useMutation } from '@tanstack/react-query'
import { activityDetailDto } from '../../../core/sync-with-backend/dto/activity/activityDetail'

const ActivityDetailPageContent = () => {
  const router = useRouter()
  const { id } = router.query

  // const [pending, setPending] = useState<PendingDto[] | []>(dummyPending)
  // // const [pending, setPending] = useState<PendingDto[] | []>([])
  // const [participant, setParticipant] = useState<ParticipantDto[] | []>(
  //   dummyParticipant
  // )

  const [activityDetail, setActivityDetail] = useState<
    activityDetailDto | undefined
  >()

  const [isLoading, setIsLoading] = useState(false)

  const { mutate: fetchActivityDetailMutate } = useMutation(getActivity, {
    onSuccess: (fetchedActivities) => {
      console.log(fetchedActivities)
      setTimeout(function () {
        // setCreatedActivities(fetchedActivities.createdActivities)
        // setJoinedActivities(fetchedActivities.joinedActivities)
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

  return (
    <>
      <Nav />
      <div className="flex flex-col gap-y-5 px-3 py-5">
        {activityDetail && (
          <>
            <ActivityDetailCard
              name={activityDetail.ownerName}
              title={activityDetail.title}
              currentParticipant={activityDetail.currentParticipant}
              maxParticipant={activityDetail.maxParticipant}
              date={dayjs(activityDetail.date).format(
                // ex 01 Jan 2000
                'DD/MM/YYYY'
              )}
              tag={activityDetail.tag}
              description={activityDetail.description}
              buttonText={activityDetail.status === 'joined' ? 'Chat' : 'Join'}
              location={activityDetail.location}
              onClick={() => {}}
            />
            {!activityDetail.pending && (
              <ParticipantList participant={activityDetail.participant} />
            )}
            {activityDetail.pending && (
              <ParticipantListTabs
                participant={activityDetail.participant}
                pending={activityDetail.pending}
              />
            )}
          </>
        )}
      </div>
    </>
  )
}

export default ActivityDetailPageContent
