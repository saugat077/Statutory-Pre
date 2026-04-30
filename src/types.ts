export interface SlideMeta {
  id: number
  title: string
  subtitle?: string
  icon: string
}

export interface SlideModule {
  meta: SlideMeta
  default: React.ComponentType
}
