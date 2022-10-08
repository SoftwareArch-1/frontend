import { axiosInstance } from '../../core/constant/axiosInstance'
import { findAllMyActivitiesDto } from '../../core/sync-with-backend/dto/activity/dto/finAll.dto'
import { apiPath } from '../../core/utils/apiPath'

const mockMyActivities = {
  createdActivities: [
    {
      id: 'a1',
      createdAt: new Date(2022, 10, 1),
      updatedAt: new Date(2022, 10, 1),
      name: 'Play Basketball',
      description: 'Play basketball at park',
      ownerId: '1234567',
      targetDate: new Date(2022, 10, 10),
      currentParticipants: 1,
      maxParticipants: 10,
      tag: 'Sport',
      location: 'Chatuchak',
    },
    {
      id: 'a2',
      createdAt: new Date(2022, 10, 1),
      updatedAt: new Date(2022, 10, 1),
      name: 'Play Football',
      description: 'Play football at park',
      ownerId: 'o;tkfgfg',
      targetDate: new Date(2022, 10, 12),
      currentParticipants: 17,
      maxParticipants: 22,
      tag: 'Sport',
      location: 'Suanluang',
    },
    {
      id: 'a3',
      createdAt: new Date(2022, 10, 1),
      updatedAt: new Date(2022, 10, 1),
      name: 'Play CSGO',
      description: 'Play CSGO public match',
      ownerId: 'asdjhjg',
      targetDate: new Date(2022, 10, 15),
      currentParticipants: 4,
      maxParticipants: 5,
      tag: 'Game',
    },
  ],
  joinedActivities: [
    {
      id: 'j1',
      createdAt: new Date(2022, 10, 1),
      updatedAt: new Date(2022, 10, 1),
      name: 'Play Basketball',
      description: 'Play basketball at park',
      ownerId: '1234567',
      targetDate: new Date(2022, 10, 10),
      currentParticipants: 1,
      maxParticipants: 10,
      tag: 'Sport',
      location: 'Chatuchak',
    },
    {
      id: 'j3',
      createdAt: new Date(2022, 10, 1),
      updatedAt: new Date(2022, 10, 1),
      name: 'Play CSGO',
      description: 'Play CSGO public match',
      ownerId: 'asdjhjg',
      targetDate: new Date(2022, 10, 15),
      currentParticipants: 4,
      maxParticipants: 5,
      tag: 'Game',
    },
  ],
}

export const getMyActivities = async () => {
  //   const { data } = await axiosInstance.get(apiPath.activity.getActivities())
  //   return activityListDtoSchema.parse(data)

  //mock database
  return findAllMyActivitiesDto.parse(mockMyActivities)
}
