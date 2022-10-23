import { io, Socket } from 'socket.io-client'
import { config } from '../../core/constant/env-config'
import {
  InitialData,
  initialDataDto,
} from '../../core/sync-with-backend/dto/message/dto/initialData'
import {
  Message,
  MessageModel,
} from '../../core/sync-with-backend/dto/message/zod/message'
import { useUserStore } from '../../user/userStore'
import { ChatSocket } from './socket.type'

let socket: ChatSocket | undefined

export const initSocket = (activityId: string) => {
  if (!socket) {
    socket = io(config.gatewayUrl, {
      query: {
        userId: useUserStore.getState().id,
        activityId: activityId,
      },
    })
  }
}

export const disconnect = () => {
  if (socket) {
    socket.disconnect()
    socket = undefined
  }
}

export const onInitData = (
  callbackInitData: (data: InitialData) => void,
  callbackPostData: (data: Message) => void,
  callbackFavoriteData: (data: Message) => void,
  activityId: string
) => {
  initSocket(activityId)
  socket?.on('connect', () => {
    console.log(socket?.id)
    socket?.emit('initialData', ({ data, error }) => {
      const initData = initialDataDto.parse(data)
      console.log(initData)
      callbackInitData(initData)
    })
    getPost(callbackPostData)
    getFavorite(callbackFavoriteData)
  })
}

export const createPost = (content: string) => {
  socket?.emit('post', { content })
}

export const toggleFavorite = (messageId: string) => {
  socket?.emit('favorite', { messageId })
}

export const getPost = (callback: (data: Message) => void) => {
  socket?.on('posted', ({ data, error }) => {
    callback(MessageModel.parse(data))
  })
}

export const getFavorite = (callback: (data: Message) => void) => {
  socket?.on('favorited', ({ data, error }) => {
    callback(MessageModel.parse(data))
  })
}
