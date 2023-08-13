import { type DeepPartial } from 'redux'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'avhuta'
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('avhuta')
  })
  test('should return with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
