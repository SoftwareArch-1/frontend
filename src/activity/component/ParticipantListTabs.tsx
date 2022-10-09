import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import { ActivityUser } from '../../core/sync-with-backend/dto/activity/activity-user'
import ParticipantCard from './ParticipantCard'
import RequestCard from './RequestCard'

interface ParticipantListTabsProps {
  participant: ActivityUser[] | []
  pending: ActivityUser[] | []
  onUpdateParticipant: (userId: string, accept: boolean) => void
}

const ParticipantListTabs = ({
  participant,
  pending,
  onUpdateParticipant,
}: ParticipantListTabsProps) => {
  return (
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
          Participant
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

      <Tab.Panels>
        <Tab.Panel className="flex flex-col gap-y-[15px]">
          {participant.map((person) => (
            <ParticipantCard
              name={person.name}
              id={person.id}
              description={person.description}
              discord={person.discordId}
              line={person.lineId}
              key={person.id}
            />
          ))}
        </Tab.Panel>
        <Tab.Panel className="flex flex-col gap-y-[15px]">
          {pending.map((person) => (
            <RequestCard
              id={person.id}
              key={person.id}
              name={person.name}
              detail={person.description}
              onCancel={() => {
                onUpdateParticipant(person.id, false)
              }}
              onConfirm={() => {
                onUpdateParticipant(person.id, true)
              }}
            />
          ))}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default ParticipantListTabs
