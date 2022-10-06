import { axiosInstance } from '../../core/constant/axiosInstance'
import { activityListDtoSchema } from '../../core/sync-with-backend/dto/activity/activityListDto'
import { apiPath } from '../../core/utils/apiPath'

const mockActivities = {
  activities: [
    {
      date: new Date(2022, 10, 20),
      currentParticipant: 1,
      description: 'Play street basketball 3v3 (4 teams)',
      maxParticipant: 12,
      location: 'Suanluang',
      tag: 'Sport',
      title: 'Play Basketball',
    },
    {
      date: new Date(2022, 10, 20),
      currentParticipant: 1,
      description: 'Play soccer 11v11 (2 teams)',
      maxParticipant: 22,
      location: 'Suanluang',
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
  ],
}

export const getActivities = async () => {
  //   const { data } = await axiosInstance.get(apiPath.activity.getActivities())
  //   return activityListDtoSchema.parse(data)

  //mock database
  return activityListDtoSchema.parse(mockActivities)
}
