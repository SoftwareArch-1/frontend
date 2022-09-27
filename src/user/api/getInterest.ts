import { axiosInstance } from '../../core/constant/axiosInstance'
import { interestDtoSchema } from '../../core/sync-with-backend/dto/user/interestDto'
import { apiPath } from '../../core/utils/apiPath'

const mockInterest = {
  interests: [
    { name: 'Game', id: '1' },
    { name: 'Sport', id: '2' },
    { name: 'Food', id: '3' },
    { name: 'Shopping', id: '4' },
    { name: 'Card', id: '5' },
    { name: 'Wine', id: '6' },
    { name: 'Health', id: '7' },
    { name: 'Anime', id: '8' },
  ],
}

export const getInterest = async (searchParams?: string) => {
  if (searchParams) {
    console.log('have params')
    // const params = new URLSearchParams([['search', searchParams ?? undefined]])
    // const { data } = await axiosInstance.get(apiPath.user.createUser(), {
    //   params,
    // })
    // return interestDtoSchema.parse(data)

    //mock database
    return interestDtoSchema.parse(mockInterest)
  } else {
    console.log('not have params')
    // const { data } = await axiosInstance.get(apiPath.user.createUser())
    // return interestDtoSchema.parse(data)

    //mock database
    return interestDtoSchema.parse(mockInterest)
  }
}
