import { mount } from '@vue/test-utils'
import router from '@/router'
import store from '@/Store'
import App from '@/App'

describe('App Component', () => {
  it('Should display Navbar with brand', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router, store]
      }
    })
    await router.push({ name: 'Home' })
    expect(wrapper.find('.navbar')).toBeDefined()
    expect(wrapper.find('.navbar-brand').text()).toEqual('LeiLei')
  })

  it('Router should change the active nav-items in the navbar.', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router, store]
      }
    })
    await router.push({ name: 'Home' })
    expect(wrapper.find('.nav-link.active').text()).toEqual('Home')

    await router.push({ name: 'About' })
    expect(wrapper.find('.nav-link.active').text()).toEqual('Über uns')

    // await router.push({ name: 'Rezepte' })
    // expect(wrapper.find('.nav-link.active').text()).toEqual('Rezepte')
  })

  it('Should render a footer with Copyright', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router, store]
      }
    })
    await router.push({ name: 'Home' })
    expect(wrapper.find('.footer').text()).toContain('© 2021 LeiLei')
  })
})
