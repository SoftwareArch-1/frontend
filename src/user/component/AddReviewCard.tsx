import dayjs from 'dayjs'
import { useState } from 'react'
import shallow from 'zustand/shallow'
import { FillUpBar } from '../../core/components/FillUpBar'
import { IconifyIcon } from '../../core/components/IconifyIcon'
import { Modal } from '../../core/components/Modal'
import TextField from '../../core/components/textField'
import { useUserStore } from '../userStore'

export const AddReviewCard = () => {
  const [showModal, setShowModal] = useState(false)
  const [starsState, setStarsState] = useState(0)

  return (
    <section className="w-100 flex max-h-24 flex-col justify-center rounded-lg bg-white drop-shadow-md">
      <button
        onClick={() => {
          setShowModal(true)
        }}
      >
        <div className="flex w-full items-center justify-center py-2 text-base">
          Add Review
        </div>
      </button>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        className={
          'flex h-auto flex-col justify-center rounded-lg bg-slate-700 drop-shadow-md'
        }
      >
        <div className="flex w-full flex-col items-center justify-center text-base">
          <div className="flex gap-x-4 pb-5">
            {starsState >= 1 ? (
              <IconifyIcon
                icon="starSolid"
                className="min-h-[24px] min-w-[24px] text-sky-500"
                onClick={() => {
                  setStarsState(1)
                }}
              />
            ) : (
              <IconifyIcon
                icon="starOultine"
                className="min-h-[24px] min-w-[24px] text-sky-500"
                onClick={() => {
                  setStarsState(1)
                }}
              />
            )}
            {starsState >= 2 ? (
              <IconifyIcon
                icon="starSolid"
                className="min-h-[24px] min-w-[24px] text-sky-500"
                onClick={() => {
                  setStarsState(2)
                }}
              />
            ) : (
              <IconifyIcon
                icon="starOultine"
                className="min-h-[24px] min-w-[24px] text-sky-500"
                onClick={() => {
                  setStarsState(2)
                }}
              />
            )}
            {starsState >= 3 ? (
              <IconifyIcon
                icon="starSolid"
                className="min-h-[24px] min-w-[24px] text-sky-500"
                onClick={() => {
                  setStarsState(3)
                }}
              />
            ) : (
              <IconifyIcon
                icon="starOultine"
                className="min-h-[24px] min-w-[24px] text-sky-500"
                onClick={() => {
                  setStarsState(3)
                }}
              />
            )}
            {starsState >= 4 ? (
              <IconifyIcon
                icon="starSolid"
                className="min-h-[24px] min-w-[24px] text-sky-500"
                onClick={() => {
                  setStarsState(4)
                }}
              />
            ) : (
              <IconifyIcon
                icon="starOultine"
                className="min-h-[24px] min-w-[24px] text-sky-500"
                onClick={() => {
                  setStarsState(4)
                }}
              />
            )}
            {starsState >= 5 ? (
              <IconifyIcon
                icon="starSolid"
                className="min-h-[24px] min-w-[24px] text-sky-500"
                onClick={() => {
                  setStarsState(5)
                }}
              />
            ) : (
              <IconifyIcon
                icon="starOultine"
                className="min-h-[24px] min-w-[24px] text-sky-500"
                onClick={() => {
                  setStarsState(5)
                }}
              />
            )}
          </div>
          <div className="flex h-24 w-full flex-col justify-center rounded-lg bg-slate-500"></div>
          <div className="flex w-full justify-end pt-3">
            <button
              className="flex w-auto items-center justify-center rounded-xl bg-sky-500 text-xs text-white"
              onClick={() => {
                setShowModal(false)
              }}
            >
              <p className="px-2 py-[2px]">Review</p>
            </button>
          </div>
        </div>
      </Modal>
    </section>
  )
}
