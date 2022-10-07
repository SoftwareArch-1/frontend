import { activityDetailDtoSchema } from '../../core/sync-with-backend/dto/activity/activityDetail'

const mockActivity = {
  ownerName: 'Jane Doe',
  title: 'Play Overwatch 2',
  currentParticipant: 1,
  maxParticipant: 5,
  date: new Date(2022, 10, 20),
  tag: 'Game',
  description: 'Play Overwatch 2 public mode',
  status: 'joined',
  participant: [
    {
      id: 'p-1',
      name: 'John Doe',
      description: 'sjhjlsdgklj',
      line: 'Line Id',
      discord: 'Discord',
    },
    {
      id: 'p-2',
      name: 'John Doe',
      description: 'sjhjlsdgklj',
      line: 'Line Id',
    },
    {
      id: 'p-3',
      name: 'John Doe',
      description: 'sjhjlsdgklj',
      line: 'Line Id',
    },
    {
      id: 'p-4',
      name: 'John Doe',
      description: 'sjhjlsdgklj',
      line: 'Line Id',
    },
  ],
}

const mockActivity2 = {
  ownerName: 'Jane Doe',
  title: 'Play Overwatch 2',
  currentParticipant: 1,
  maxParticipant: 5,
  date: new Date(2022, 10, 20),
  tag: 'Game',
  description: 'Play Overwatch 2 public mode',
  status: 'joined',
  participant: [
    {
      id: 'p-1',
      name: 'John Doe',
      description: 'sjhjlsdgklj',
      line: 'Line Id',
      discord: 'Discord',
    },
    {
      id: 'p-2',
      name: 'John Doe',
      description: 'sjhjlsdgklj',
      line: 'Line Id',
    },
    {
      id: 'p-3',
      name: 'John Doe',
      description: 'sjhjlsdgklj',
      line: 'Line Id',
    },
    {
      id: 'p-4',
      name: 'John Doe',
      description: 'sjhjlsdgklj',
      line: 'Line Id',
    },
  ],
  pending: [
    {
      id: 'pe-1',
      name: 'John Doe',
      description: 'sjhjlsdgklj',
    },
    {
      id: 'pe-2',
      name: 'John Doe',
      description: 'sjhjlsdgklj',
    },
    {
      id: 'pe-3',
      name: 'John Doe',
      description: 'sjhjlsdgklj',
    },
  ],
}

export const getActivity = async (id: string) => {
  //   console.log(id)
  //   const { data } = await axiosInstance.get(apiPath.activity.getActivities())
  //   return activityListDtoSchema.parse(data)

  //mock database
  console.log(id.charCodeAt(0))
  if (id.charCodeAt(0) % 2 == 1) {
    return activityDetailDtoSchema.parse(mockActivity)
  }
  return activityDetailDtoSchema.parse(mockActivity2)
}
