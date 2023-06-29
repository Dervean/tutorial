<template>
  <mara-field v-bind="$attrs">
    <template slot="label">
      <slot name="label"></slot>
    </template>
    <template v-slot="{ value, setValue }">
      <component
        :is="MaraComponentsMapper[$attrs.uid]"
        :mara-form="maraForm"
        :value="value"
        v-bind="$attrs"
        @input="setValue"
      />
    </template>
  </mara-field>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { MaraComponentsMapper } from '@example-mara/components/mara-components/index'
import __config__ from './description'

export default defineComponent({
  __config__,
  name: 'mara-hub',
  inject: ['maraForm'],
  setup() {
    return {
      MaraComponentsMapper,
    }
  },
})
</script>
