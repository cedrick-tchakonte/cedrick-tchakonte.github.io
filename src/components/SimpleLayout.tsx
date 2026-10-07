import { PageLayout } from '@/components/PageLayout'

type SimpleLayoutProps = {
  title: React.ReactNode
  intro: React.ReactNode
  children: React.ReactNode
}

/** Same page header and entrance as PageLayout (title + intro, then content). */
export function SimpleLayout({ title, intro, children }: SimpleLayoutProps) {
  return (
    <PageLayout title={title} subtitle={intro}>
      {children}
    </PageLayout>
  )
}
