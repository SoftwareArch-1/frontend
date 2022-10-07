import { ParticipantDto } from '../../core/sync-with-backend/dto/activity/participantDto'
import ParticipantCard from './ParticipantCard'

interface ParticipantListProps {
  participant: ParticipantDto[] | []
}

const ParticipantList = ({ participant }: ParticipantListProps) => {
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
            discord={person.discord}
            line={person.line}
            key={person.id}
          />
        ))}
      </div>
    </div>
  )
}

export default ParticipantList