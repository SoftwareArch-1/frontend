import classNames from 'classnames'
import { Fragment, ReactNode } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { IconifyIcon } from './IconifyIcon'

type IModalProps = Parameters<typeof Dialog>[0] & {
  children?: ReactNode
  /** classes to apply to the modal panel */
  className?: string
  /** classes to apply to the modal overlay wrapper e.g. to change its width */
  panelWrapperClassName?: string
}

/**
 * Modal component which is the `@headlessui/react` `Dialog` component.
 * @see https://headlessui.com/react/dialog
 * @see https://tailwindui.com/components/application-ui/overlays/modals#component-47a5888a08838ad98779d50878d359b3
 */
export const Modal = ({
  open,
  onClose,
  children,
  as,
  className,
  panelWrapperClassName,
}: IModalProps) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as={as ?? 'div'}
        className="relative z-10"
        onClose={onClose}
        // initialFocus={initialFocus}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#D9D9D9]/60 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 flex justify-center overflow-y-auto">
          <div
            className={classNames(
              'relative flex min-h-full w-[90%] max-w-lg items-center justify-center text-center',
              panelWrapperClassName // NOTE: change the width here `panelWrapperClassName` 👌👌👌👌👌
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 sm:scale-95"
            >
              <div className="relative w-full rounded-lg shadow-xl transition-all">
                {/* <div className="absolute top-0 right-0 grid aspect-square h-7 w-7 translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white shadow-md hover:bg-gray-100">
                  <IconifyIcon resetStyle className="text-sm" icon="close-thick" />
                </div> */}
                <Dialog.Panel className="overflow-hidden">
                  <button className="sr-only">
                    {/* To trap the initial focus */}
                  </button>

                  <div
                    className={classNames(
                      'rounded-lg bg-white p-4 text-left sm:p-6',
                      className
                    )}
                  >
                    {children}
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
