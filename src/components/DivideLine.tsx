import { RiMoreLine } from 'react-icons/ri'

const DivideLine = () => {
  return (
    <div className="relative mx-auto flex w-4/5 items-center py-6 sm:py-8" aria-hidden="true">
      <div className="flex-grow border-t border-primaryText-200/70 dark:border-primaryText-800"></div>
      <span className="mx-4 flex-shrink text-primaryText-400 dark:text-primaryText-600">
        <RiMoreLine />
      </span>
      <div className="flex-grow border-t border-primaryText-200/70 dark:border-primaryText-800"></div>
    </div>
  )
}

export default DivideLine
