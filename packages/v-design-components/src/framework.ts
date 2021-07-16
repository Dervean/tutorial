import type { App, InjectionKey } from 'vue'

export interface VuetifyComponentDefaults {
  [key: string]: undefined | Record<string, unknown>
  global: Record<string, unknown>
}

export interface VuetifyInstance {
  defaults: VuetifyComponentDefaults
}

export interface VuetifyOptions {
  components?: Record<string, any>
  defaults?: Partial<VuetifyComponentDefaults>
}

export const VuetifySymbol: InjectionKey<VuetifyInstance> = Symbol.for('vuetify')

export const createVuetify = (options: VuetifyOptions) => {
  const { components } = options
  const install = (app: App) => {
    const vuetify: VuetifyInstance = {
      defaults: {
        global: {},
      }
    }
    /** 组件注册 */
    for (const key in components) {
      app.component(key, components[key])
    }
    app.provide(VuetifySymbol, vuetify)
    app.config.globalProperties.$vuetify = vuetify
  }
  return { install }
}
