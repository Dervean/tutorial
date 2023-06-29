// @ts-ignore
import Getter from '@example-dyna/.dyna/script/getter'
import { DynaResourceType } from '@example-dyna/.dyna/typings'
const add = require('shared')

;(function () {
  const appEle = document.getElementById('app')
  const attach = (parent: HTMLElement, text: string) => {
    const ele = document.createElement('div')
    const textNode = document.createTextNode(`Output >> ${text}`)
    ele.append(textNode)
    parent.append(ele)
  }
  Getter('LOCATION', false).loaded.then((data: DynaResourceType<'LOCATION'>) => {
    attach(appEle, data.country)
    attach(appEle, data.location)
    attach(appEle, data.weather)
    attach(appEle, add(1, 1))
  })
})()
