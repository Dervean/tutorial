import KOA from 'koa'
import { Context } from 'koa'
import Router from 'koa-router'
import BodyParser from 'koa-bodyparser'
import assert from 'assert'

/** controller */
const handleGetSayHello = (ctx: Context) => {
  const query = ctx.request.query
  const name = query['name']

  try {
    assert.ok(typeof name === 'string', `name is required!`)
    ctx.body = {
      data: `hello ${name}`,
      status: 0,
      message: 'success',
    }
  } catch (e) {
    ctx.body = {
      status: -1,
      message: e.message,
    }
  } finally {
    ctx.set('Content-Type', 'application/json;charset=utf-8')
  }
}

const handlePostSum = (ctx: Context) => {
  const query = ctx.request.body
  const n1 = query['n1']
  const n2 = query['n2']
  try {
    assert.ok(typeof n1 === 'number', `number n1 is required!`)
    assert.ok(typeof n2 === 'number', `number n2 is required!`)
    const sum = n1 + n2
    ctx.body = {
      data: sum,
      status: 0,
      message: 'success',
    }
  } catch (e) {
    ctx.body = {
      status: -1,
      message: e.message,
    }
  } finally {
    ctx.set('Content-Type', 'application/json;charset=utf-8')
  }
}

/** router */
const router = new Router()
// prettier-ignore
router
  .get(`/api/say-hello`, handleGetSayHello)
  .post(`/api/sum`, handlePostSum)

/** app */
const app = new KOA()
app.use(BodyParser())
app.use(router.routes())

const port = 8080
app.listen(port)
console.log(`server started at port ${port}`)
