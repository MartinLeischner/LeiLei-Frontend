import { mount } from '@vue/test-utils'
import store from '@/Store'
import Rezepte from '@/views/Rezepte'

jest.mock('axios', () => ({
  get: () => {
    console.log('Axios get ... do nothing')
    return Promise.resolve([])
  },
  delete: () => {
    console.log('Axios delete ... do nothing')
    return Promise.resolve([])
  }
}))

describe('Rezept Component', () => {
  it('Rezept Component should show "Keine Rezepte vorhanden." if there is no rezept', async () => {
    const wrapper = mount(Rezepte, {
      global: {
        plugins: [store]
      }
    })

    await wrapper.vm.$nextTick(() => {
      const expected = 'Keine Rezepte vorhanden.'
      expect(wrapper.text()).toContain(expected)
    })
  })

  it('Rezept Component should show all Rezepte fetched from the backend', async () => {
    const wrapper = mount(Rezepte, {
      global: {
        plugins: [store]
      }
    })
    // adding two Rezepte to store
    store.state.rezepte[0] = {
      name: 'Rezept 1',
      imageName: null,
      ingredients: 'Ingredient 1, Ingredient 2',
      difficulty: 1,
      time: 15
    }
    store.state.rezepte[1] = {
      name: 'Rezept 2',
      imageName: null,
      ingredients: 'Ingredient 3, Ingredient 4',
      difficulty: 2,
      time: 45
    }

    await wrapper.vm.$nextTick(() => {
      expect(wrapper.text()).toContain('Rezept 1')
      expect(wrapper.text()).toContain('Rezept 2')
      expect(wrapper.findAll('.rezept__card').length).toEqual(2)
    })

    // await wrapper.find('.rezept__card .btn__delete').trigger('click')
    delete store.state.rezepte[0]

    await wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll('.rezept__card').length).toEqual(1)
    })
  })
})
