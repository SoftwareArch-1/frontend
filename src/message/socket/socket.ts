import { io, Socket } from 'socket.io-client'
import { config } from '../../core/constant/env-config'
import {
  InitialData,
  initialDataDto,
} from '../../core/sync-with-backend/dto/message/dto/initialData'
import { useUserStore } from '../../user/userStore'
import {
  ChatMessage,
  chatMessageSchema,
  ChatMsgLikesUpdated,
  ChatSocket,
} from './socket.type'

let socket: ChatSocket | undefined

export const initSocket = (activityId: string) => {
  if (!socket) {
    socket = io(config.gatewayUrl, {
      query: {
        userId: useUserStore.getState().id,
        activityId: activityId,
      },
      withCredentials: true,
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
  callbackPostData: (data: ChatMessage) => void,
  callbackFavoriteData: (data: ChatMsgLikesUpdated) => void,
  activityId: string
) => {
  initSocket(activityId)
  socket?.on('connect', () => {
    console.log(socket?.id)
    console.log('hi')
    socket?.emit('initialData', ({ data, error }) => {
      console.log('error', error)
      console.log(data)
      const initData = initialDataDto.parse(data)
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

export const getPost = (callback: (data: ChatMessage) => void) => {
  socket?.on('posted', ({ data, error }) => {
    callback(chatMessageSchema.parse(data))
  })
}

export const getFavorite = (callback: (data: ChatMsgLikesUpdated) => void) => {
  socket?.on('favorited', ({ data, error }) => {
    if (error) {
      console.log(error)
    } else {
      callback(data!)
    }
  })
}
