import { useId } from 'react'

type SectionProps = {
  title: string
  children: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
      className="md:border-l md:border-primaryText-200/70 md:pl-6 md:dark:border-primaryText-800"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2
          id={id}
          className="text-sm font-semibold text-primaryText-900 dark:text-primaryText-50"
        >
          {title}
        </h2>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}
