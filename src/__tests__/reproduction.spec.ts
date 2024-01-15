import { it, expect } from 'vitest'
import { count } from 'vcir-package-a'
import { CounterComponent } from 'vcir-package-b'
import { mount } from '@vue/test-utils'

it('should load the dev package in all contexts', () => {
  count() // Should now b2 1
  count() // Should now be 2
  const wrapper = mount({
    template: `<CounterComponent /><CounterComponent /><CounterComponent />`,
    components: { CounterComponent }
  })
  expect(wrapper.html()).toBe(`<div>counter:2</div>
<div>counter:3</div>
<div>counter:4</div>`)
})
