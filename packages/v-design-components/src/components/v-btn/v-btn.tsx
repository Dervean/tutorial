import { defineComponent, withDirectives } from "vue"

export default defineComponent({
  name: 'v-btn',
  setup(props, { slots }) {
    return () => withDirectives(
      <div>v-btn placeholder</div>,
      [

      ]
    )
  }
})
