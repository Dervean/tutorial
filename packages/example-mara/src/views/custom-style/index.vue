<template>
  <div class="custom-style-wrapper">
    <mara-config-form v-if="schema" v-model="values" :json-schema="schema" :label-width="0"></mara-config-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import { getSchemaJson } from '@nibfe/aram-sdk'

export default defineComponent({
  name: 'custom-style',
  setup() {
    const values = ref({
      country: 'china',
      city: 'BJ',
      name: 'xiaoming',
      sex: 'male',
    })
    const schema = ref()
    onMounted(() => {
      getSchemaJson('aram', 16, false, {
        schemaUid: 'my-test',
        prodVersion: 'latest',
      }).then(data => {
        console.log('data :>> ', data)
        schema.value = data
      })
    })
    return {
      values,
      schema,
    }
  },
})
</script>
<style lang="scss" scoped>
.custom-style-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
