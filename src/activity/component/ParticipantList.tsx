import { useRouter } from 'next/router'
import { ActivityUser } from '../../core/sync-with-backend/dto/activity/activity-user'
import { pagePath } from '../../core/utils/pagePath'
import { useUserStore } from '../../user/userStore'
import ParticipantCard from './ParticipantCard'

interface ParticipantListProps {
  participant: ActivityUser[] | []
  enableReview?: boolean
}

const ParticipantList = ({ participant }: ParticipantListProps) => {
  const router = useRouter()

  return (
    <div className="flex w-full flex-col items-center gap-y-5">
      <div className="flex h-[35px] w-[160px] items-center  justify-center rounded-[10px] bg-slate-200 py-1">
        Participant
      </div>
      <div className="flex w-full flex-col gap-y-[15px]">
        {participant.map((person) => (
          <ParticipantCard
            name={person.name}
            id={person.id}
            description={person.description}
            discord={person.discordId}
            line={person.lineId}
            key={person.id}
            onClick={() => {
              if (useUserStore.getState().id === person.id) {
                router.push(pagePath.ProfilePage())
              } else {
                router.push(pagePath.ViewProfilePage(person.id))
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ParticipantList
