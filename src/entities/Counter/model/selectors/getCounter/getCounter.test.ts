import { getCounter } from './getCounter'
import { type DeepPartial } from 'redux'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('getCounter', () => {
  test('shuld return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    }
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})
