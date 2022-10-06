import dayjs from 'dayjs'
import { useState } from 'react'
import FloatingActionButton from '../../../core/components/FloatingActionButton'
import { IconifyIcon } from '../../../core/components/IconifyIcon'
import { Modal } from '../../../core/components/Modal'
import { Nav } from '../../../core/components/Nav'
import SearchBar from '../../../core/components/SearchBar'
import ActivityCard from '../ActivityCard'
import ActivityDetailCard from '../ActivityDetailCard'
import InterestModalContent from '../InterestModalContent'
import ParticipantCard from '../ParticipantCard'
import RequestCard from '../RequestCard'

const dummyActivity = [
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

const ActivityPageContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState<string[]>([])

  const onFilter = (filterArray: string[]) => {
    setFilter(filterArray)
    console.log(filterArray)
    setIsModalOpen(false)
  }

  return (
    <>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <InterestModalContent
          initInterest={filter}
          onFilter={onFilter}
          multipleSelect
        />
      </Modal>
      <Nav />
      <div className="flex flex-col gap-y-[5px] px-5 pt-[25px] pb-5">
        <div className="flex w-full flex-row items-center gap-x-2.5">
          <div className="w-full">
            <SearchBar
              onSearch={(data) => console.log(data)}
              placeHolder="Search Activity"
            />
          </div>
          <IconifyIcon icon="filter" onClick={() => setIsModalOpen(true)} />
          <IconifyIcon icon="sort" />
        </div>
        <div className="flex flex-col gap-y-3">
          {dummyActivity.map((activityItem) => (
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
        </div>
      </div>
      <FloatingActionButton
        className="bg-sky-500"
        onClick={() => {
          console.log('Go to create Activity page')
          //router.push(pagePath.CreateActivityPage())
        }}
      >
        <IconifyIcon icon="plus" className="h-7 w-7 text-white" />
      </FloatingActionButton>
    </>
  )
}

export default ActivityPageContent
