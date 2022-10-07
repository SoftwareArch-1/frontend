import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Nav } from '../../../core/components/Nav'
import { ParticipantDto } from '../../../core/sync-with-backend/dto/activity/participantDto'
import { PendingDto } from '../../../core/sync-with-backend/dto/activity/pendingDto'
import ActivityDetailCard from '../ActivityDetailCard'
import ParticipantList from '../ParticipantList'
import ParticipantListTabs from '../ParticipantListTabs'

const dummyParticipant = [
  {
    id: 'p-1',
    name: 'John Doe',
    description: 'sjhjlsdgklj',
    line: 'Line Id',
    discord: 'Discord',
  },
  {
    id: 'p-2',
    name: 'John Doe',
    description: 'sjhjlsdgklj',
    line: 'Line Id',
  },
  {
    id: 'p-3',
    name: 'John Doe',
    description: 'sjhjlsdgklj',
    line: 'Line Id',
  },
  {
    id: 'p-4',
    name: 'John Doe',
    description: 'sjhjlsdgklj',
    line: 'Line Id',
  },
]

const dummyPending = [
  {
    id: 'pe-1',
    name: 'John Doe',
    description: 'sjhjlsdgklj',
  },
  {
    id: 'pe-2',
    name: 'John Doe',
    description: 'sjhjlsdgklj',
  },
  {
    id: 'pe-3',
    name: 'John Doe',
    description: 'sjhjlsdgklj',
  },
]

const ActivityDetailPageContent = () => {
  const router = useRouter()
  const { id } = router.query

  const [pending, setPending] = useState<PendingDto[] | []>(dummyPending)
  // const [pending, setPending] = useState<PendingDto[] | []>([])
  const [participant, setParticipant] = useState<ParticipantDto[] | []>(
    dummyParticipant
  )

  return (
    <>
      <Nav />
      <div className="flex flex-col gap-y-5 px-3 py-5">
        <ActivityDetailCard
          name={'John Doe'}
          title={'Play PUBG'}
          currentParticipant={2}
          maxParticipant={4}
          date={dayjs(new Date()).format(
            // ex 01 Jan 2000
            'DD/MM/YYYY'
          )}
          tag={'Game'}
          description={'Play public match PUBG'}
          buttonText="Join"
          onClick={() => {}}
        />
        {pending.length === 0 && <ParticipantList participant={participant} />}
        {pending.length !== 0 && (
          <ParticipantListTabs participant={participant} pending={pending} />
        )}
      </div>
    </>
  )
}

export default ActivityDetailPageContent
