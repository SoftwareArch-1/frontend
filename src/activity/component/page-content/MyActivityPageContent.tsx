import { Nav } from '../../../core/components/Nav'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import { IconifyIcon } from '../../../core/components/IconifyIcon'
import ActivityCard from '../ActivityCard'
import dayjs from 'dayjs'

const dummyCreatedActivity = [
  {
    date: new Date(2022, 10, 20),
    currentParticipant: 1,
    description: 'Play street basketball 3v3 (4 teams)',
    maxParticipant: 12,
    place: 'Suanluang',
    tag: 'Sport',
    title: 'Play Basketball',
  },
  {
    date: new Date(2022, 10, 20),
    currentParticipant: 1,
    description: 'Play soccer 11v11 (2 teams)',
    maxParticipant: 22,
    place: 'Suanluang',
    tag: 'Sport',
    title: 'Play Soccer',
  },
  {
    date: new Date(2022, 10, 5),
    currentParticipant: 3,
    description: 'Play valorant (1 team) have discord',
    maxParticipant: 5,
    tag: 'Game',
    title: 'Play Valorant',
  },
]

const dummyJoinedActivity = [
  {
    date: new Date(2022, 10, 5),
    currentParticipant: 4,
    description: 'Play valorant (1 team) have discord',
    maxParticipant: 5,
    tag: 'Game',
    title: 'Play Valorant',
  },
  {
    date: new Date(2022, 10, 2),
    currentParticipant: 4,
    description: 'Play Pubg (1 team) have discord',
    maxParticipant: 4,
    tag: 'Game',
    title: 'Play Pubg',
  },
  {
    date: new Date(2022, 10, 20),
    currentParticipant: 2,
    description: 'Play Badminton',
    maxParticipant: 2,
    place: 'Suanluang',
    tag: 'Sport',
    title: 'Play Badminton',
  },
]

const MyActivityPageContent = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col gap-y-[5px] px-5 pt-[25px] pb-5">
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
            <IconifyIcon icon="sort" />
          </div>
          <Tab.Panels>
            <Tab.Panel className="flex flex-col gap-y-3">
              {dummyCreatedActivity.map((activityItem) => (
                <ActivityCard
                  currentParticipant={activityItem.currentParticipant}
                  date={dayjs(activityItem.date).format(
                    // ex 01 Jan 2000
                    'DD/MM/YYYY'
                  )}
                  description={activityItem.description}
                  maxParticipant={activityItem.maxParticipant}
                  place={activityItem.place}
                  tag={activityItem.tag}
                  title={activityItem.title}
                  key={activityItem.title}
                />
              ))}
            </Tab.Panel>
            <Tab.Panel className="flex flex-col gap-y-3">
              {dummyJoinedActivity.map((activityItem) => (
                <ActivityCard
                  currentParticipant={activityItem.currentParticipant}
                  date={dayjs(activityItem.date).format(
                    // ex 01 Jan 2000
                    'DD/MM/YYYY'
                  )}
                  description={activityItem.description}
                  maxParticipant={activityItem.maxParticipant}
                  place={activityItem.place}
                  tag={activityItem.tag}
                  title={activityItem.title}
                  key={activityItem.title}
                />
              ))}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  )
}

export default MyActivityPageContent
