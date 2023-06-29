// @ts-ignore
import { Mara, COM_TYPE } from '@nibfe/mara-core'
import MaraHub from '@/components/mara-components/mara-hub/index.vue'
import MaraContainer from '@/components/mara-components/custom-container/mara-container/index.vue'
import MaraContainerX from '@/components/mara-components/custom-container/mara-container-x/index.vue'
import MaraContainerY from '@/components/mara-components/custom-container/mara-container-y/index.vue'

interface PluginFunction {
  (params: { [key: string]: any }): void
}
interface ComponentFunction {
  (name: string, component: any, type: COM_TYPE): void
}
interface Params {
  registerFormats: PluginFunction
  registerRules: PluginFunction
  registerComponent: ComponentFunction
}

Mara.use(({ registerComponent }: Params) => {
  /** block comp */
  registerComponent('MaraContainer', MaraContainer, COM_TYPE.BLOCK)
  registerComponent('MaraContainerX', MaraContainerX, COM_TYPE.BLOCK)
  registerComponent('MaraContainerY', MaraContainerY, COM_TYPE.BLOCK)
  /** item comp */
  registerComponent('MaraHub', MaraHub, COM_TYPE.FORMITEM)
})
