// import { activityDetailDtoSchema } from '../../core/sync-with-backend/dto/activity/activityDetail'

import { findOneActivity } from '../../core/sync-with-backend/dto/activity/dto/findOne.dto'

const mockActivity = {
  id: '1',
  createdAt: new Date(2022, 10, 10),
  updatedAt: new Date(2022, 10, 10),
  name: 'Play Overwatch 2',
  description: 'Play overwatch2 public match',
  ownerId: 'owenerId',
  targetDate: new Date(2022, 10, 12),
  maxParticipants: 5,
  requireLine: false,
  requireDiscord: true,
  tag: 'Game',
  ownerName: 'Baimon Perasit',
  isOwner: false,
  joinedUserIds: ['p1', 'p2', 'p3', 'p4'],
  joinedUsers: [
    {
      id: 'p1',
      name: 'Baimon Perasit',
      description: 'Just wanna play games',
      lineId: 'Line Id',
      discordId: 'baimon munk',
    },
    {
      id: 'p2',
      name: 'John Dow',
      description: 'Hardworking but lazy',
      lineId: 'Line Id',
      discordId: 'John',
    },
    {
      id: 'p3',
      name: 'Jane Doe',
      description: 'Just wanna play games',
      lineId: null,
      discordId: 'Jane',
    },
    {
      id: 'p4',
      name: 'Noname',
      description: 'Just wanna play games',
      lineId: null,
      discordId: '555',
    },
  ],
  // pendingUsers: [
  //   {
  //     id: 'p1',
  //     name: 'Baimon Perasit',
  //     description: 'Just wanna play games',
  //     lineId: 'Line Id',
  //     discordId: 'baimon munk',
  //   },
  //   {
  //     id: 'p2',
  //     name: 'John Dow',
  //     description: 'Hardworking but lazy',
  //     lineId: 'Line Id',
  //     discordId: 'John',
  //   },
  //   {
  //     id: 'p3',
  //     name: 'Jane Doe',
  //     description: 'Just wanna play games',
  //     lineId: 'Line Id',
  //     discordId: 'Jane',
  //   },
  //   {
  //     id: 'p4',
  //     name: 'Noname',
  //     description: 'Just wanna play games',
  //     lineId: 'Line Id',
  //     discordId: '555',
  //   },
  // ],
}

export const getActivity = async (id: string) => {
  //   console.log(id)
  //   const { data } = await axiosInstance.get(apiPath.activity.getActivities())
  //   return activityListDtoSchema.parse(data)
  //mock database
  return findOneActivity.parse(mockActivity)
}
