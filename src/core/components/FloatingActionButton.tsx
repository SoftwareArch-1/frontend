import classNames from 'classnames'

interface FloatingActionButtonProps {
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

const FloatingActionButton = ({
  onClick,
  children,
  className,
}: FloatingActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'z-90 fixed bottom-[80px] right-8 flex min-h-[45px] min-w-[45px] items-center justify-center rounded-full shadow-md',
        className
      )}
    >
      {children}
    </button>
  )
}

export default FloatingActionButton
