import { DynaGetter } from '@hfe/dyna-cli'
import LocalProdAssets from '../prod/index.js'
import LocalTestAssets from '../test/index.js'
import DynaConf from '../../.dynarc.json'

export default function (name, isTestEnv, useFallback = true) {
  return DynaGetter(name, isTestEnv, DynaConf, useFallback, LocalProdAssets, LocalTestAssets)
}
