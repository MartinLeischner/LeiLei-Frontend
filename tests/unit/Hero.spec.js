import { shallowMount } from '@vue/test-utils'
import Hero from '@/components/Hero'

describe('Hero Component', () => {
  it('hero should show "LeiLei Kochbuch" when loaded', () => {
    const expected = 'LeiLei Kochbuch'
    const wrapper = shallowMount(Hero)
    expect(wrapper.text()).toContain(expected)
  })
})
