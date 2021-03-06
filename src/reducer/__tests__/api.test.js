import api from '../api'

jest.mock('../../nestedReducer', () => reducer => (state, action) => state)

jest.mock('../fetchList', () => options => (state, action) => ({
  name: 'fetchList',
  state,
  action,
}))

jest.mock('../fetchInfo', () => options => (state, action) => ({
  name: 'fetchInfo',
  state,
  action,
}))

jest.mock('../create', () => options => (state, action) => ({
  name: 'create',
  state,
  action,
}))

jest.mock('../update', () => options => (state, action) => ({
  name: 'update',
  state,
  action,
}))

jest.mock('../destroy', () => options => (state, action) => ({
  name: 'destroy',
  state,
  action,
}))

const options = {}

describe('without parameters', () => {
  it('returns undefined', () => {
    expect(api(options)()).toEqual(undefined)
  })
})

describe('without action', () => {
  it('returns state', () => {
    const state = { foo: 'bar' }

    expect(api(options)(state)).toEqual(state)
  })
})

describe('with unknown action', () => {
  it('returns state', () => {
    const state = { foo: 'bar' }
    const action = { type: '@foo/BAR_BAZ' }

    expect(api(options)(state, action)).toEqual(state)
  })
})

describe('with FETCH_LIST action', () => {
  it('returns fetchList reducer', () => {
    const state = { foo: 'bar' }
    const action = { type: '@foo/FETCH_LIST_FOO' }

    expect(api(options)(state, action)).toEqual(state)
  })
})

describe('with FETCH_INFO action', () => {
  it('returns fetchInfo reducer', () => {
    const state = { foo: 'bar' }
    const action = { type: '@foo/FETCH_INFO_FOO' }

    expect(api(options)(state, action)).toEqual(state)
  })
})

describe('with CREATE action', () => {
  it('returns create reducer', () => {
    const state = { foo: 'bar' }
    const action = { type: '@foo/CREATE_FOO' }

    expect(api(options)(state, action)).toEqual(state)
  })
})

describe('with UPDATE action', () => {
  it('returns update reducer', () => {
    const state = { foo: 'bar' }
    const action = { type: '@foo/UPDATE_FOO' }

    expect(api(options)(state, action)).toEqual(state)
  })
})

describe('with DESTROY action', () => {
  it('returns destroy reducer', () => {
    const state = { foo: 'bar' }
    const action = { type: '@foo/DESTROY_FOO' }

    expect(api(options)(state, action)).toEqual(state)
  })
})
