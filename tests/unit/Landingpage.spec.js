import { shallowMount } from '@vue/test-utils'
import Hero from '@/components/Hero'

describe('Open Landingpage', () => {
  it('show hero with title when loaded', () => {
    const wrapper = shallowMount(Hero)
    console.log(wrapper)
    expect(wrapper.text()).toContain('LeiLei Kochbuch')
  })
})
