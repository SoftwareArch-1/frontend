import dayjs from 'dayjs'
import ActivityCard from '../ActivityCard'

const ActivityPageContent = () => {
  return (
    <div className="px-5 py-5">
      <ActivityCard
        date={dayjs(new Date()).format(
          // ex 01 Jan 2000
          'DD/MM/YYYY'
        )}
        currentParticipant={1}
        description={
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, voluptates.'
        }
        maxParticipant={25}
        place={'Bangkok'}
        tag={'Sport'}
        title={'Title'}
      />
    </div>
  )
}

export default ActivityPageContent
