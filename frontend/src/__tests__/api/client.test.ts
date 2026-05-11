import { describe, it, expect, afterEach } from 'vitest'
import MockAdapter from 'axios-mock-adapter'
import api, { joinWaitlist } from '../../api/client'

const mock = new MockAdapter(api)

describe('API client', () => {
  afterEach(() => {
    mock.reset()
  })

  describe('joinWaitlist', () => {
    it('成功注册邮件', async () => {
      mock.onPost('/waitlist').reply(201, { id: 1, email: 'test@example.com' })

      const res = await joinWaitlist('test@example.com')
      expect(res.status).toBe(201)
      expect(res.data.email).toBe('test@example.com')
    })

    it('重复邮件返回400', async () => {
      mock.onPost('/waitlist').reply(400, { detail: 'Email already registered' })

      await expect(joinWaitlist('dup@example.com')).rejects.toThrow()
    })
  })
})
