import { axiosInstance } from '../../core/constant/axiosInstance'
import { myActivityListDtoSchema } from '../../core/sync-with-backend/dto/activity/myActivityListDto'
import { apiPath } from '../../core/utils/apiPath'

const mockMyActivities = {
  createdActivities: [
    {
      id: 'ca1',
      date: new Date(2022, 10, 20),
      currentParticipant: 1,
      description: 'Play street basketball 3v3 (4 teams)',
      maxParticipant: 12,
      location: 'Suanluang',
      tag: 'Sport',
      title: 'Play Basketball',
    },
    {
      id: 'ca2',
      date: new Date(2022, 10, 20),
      currentParticipant: 1,
      description: 'Play soccer 11v11 (2 teams)',
      maxParticipant: 22,
      location: 'Suanluang',
      tag: 'Sport',
      title: 'Play Soccer',
    },
    {
      id: 'ca3',
      date: new Date(2022, 10, 5),
      currentParticipant: 3,
      description: 'Play valorant (1 team) have discord',
      maxParticipant: 5,
      tag: 'Game',
      title: 'Play Valorant',
    },
  ],
  joinedActivities: [
    {
      id: 'ja1',
      date: new Date(2022, 10, 5),
      currentParticipant: 4,
      description: 'Play valorant (1 team) have discord',
      maxParticipant: 5,
      tag: 'Game',
      title: 'Play Valorant',
    },
    {
      id: 'ja2',
      date: new Date(2022, 10, 2),
      currentParticipant: 4,
      description: 'Play Pubg (1 team) have discord',
      maxParticipant: 4,
      tag: 'Game',
      title: 'Play Pubg',
    },
    {
      id: 'ja3',
      date: new Date(2022, 10, 20),
      currentParticipant: 2,
      description: 'Play Badminton',
      maxParticipant: 2,
      location: 'Suanluang',
      tag: 'Sport',
      title: 'Play Badminton',
    },
  ],
}

export const getMyActivities = async () => {
  //   const { data } = await axiosInstance.get(apiPath.activity.getActivities())
  //   return activityListDtoSchema.parse(data)

  //mock database
  return myActivityListDtoSchema.parse(mockMyActivities)
}
