import { type DeepPartial } from 'redux'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginLoading } from './getLoginLoading'

describe('getLoginLoading.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true
      }
    }
    expect(getLoginLoading(state as StateSchema)).toEqual(true)
  })
  test('should return with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginLoading(state as StateSchema)).toEqual(false)
  })
})
