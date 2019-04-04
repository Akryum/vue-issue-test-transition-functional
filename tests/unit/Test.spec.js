import { shallowMount, createLocalVue } from '@vue/test-utils'
import Test from '@/components/Test.vue'

const localVue = createLocalVue()

localVue.component('v-btn', {})
localVue.component('v-form', {})
localVue.component('v-card-title', { functional: true })

describe('test', () => {
  test('test test', async () => {
    const wrapper = shallowMount(Test, {
      localVue,
      sync: false
    })
    expect(wrapper.find({ ref: 'form' }).exists()).toBe(false)
    wrapper.find({ ref: 'btn' }).vm.$emit('click')
    // Wait for update
    await wrapper.vm.$nextTick()
    expect(wrapper.find({ ref: 'form' }).exists()).toBe(true)
  })
})
