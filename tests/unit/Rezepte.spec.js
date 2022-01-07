import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import flushPromises from 'flush-promises'
import Rezepte from '@/views/Rezepte'

jest.mock('axios', () => ({
  get: () => Promise.resolve([
    {
      name: 'Rezept 1',
      imageName: null,
      ingredients: 'Ingredient 1, Ingredient 2',
      difficulty: 1,
      time: 15
    },
    {
      name: 'Rezept 2',
      imageName: null,
      ingredients: 'Ingredient 3, Ingredient 4',
      difficulty: 2,
      time: 45
    }
  ])
}))
const store = createStore({
  state: {
    rezepte: {}
  }
})

describe('Rezept Component', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('Rezept Component should show "Keine Rezepte vorhanden." if there is no rezept', async () => {
    const wrapper = shallowMount(Rezepte, {
      store,
      stubs: ['router-link']
    })
    await flushPromises()
    const expected = 'Keine Rezepte vorhanden.'
    expect(wrapper.text()).toContain(expected)
  })

  it('Rezept Component should show all Rezepte fetched from the backend', () => {
    fetch.mockResponseOnce(JSON.stringify())

    const wrapper = shallowMount(Rezepte, {
      store
    })
    expect(wrapper.text()).toContain('Rezept 1')
    expect(wrapper.text()).toContain('Rezept 2')
  })
})
