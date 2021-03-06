import * as components from '@/components'
import * as framework from '@/framework'

export * from '@/components'
export * from '@/framework'

export const createVuetify = (options: framework.VuetifyOptions = {}) => {
  const { createVuetify } = framework
  return createVuetify({ components, ...options })
}
