<template>
  <mara-field v-bind="$attrs" class="mara-container-x-wrapper">
    <slot name="title">
      <div class="title">{{ title }}</div>
    </slot>
    <div class="body">
      <slot />
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </mara-field>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent<{ title: string }>({
  name: 'mara-container-x',
  props: {
    title: { type: String },
  },
})
</script>
<style scoped lang="scss">
.mara-container-x-wrapper ~ .mara-container-x-wrapper {
  margin-top: 30px;
}
.mara-container-x-wrapper {
  .title {
    position: relative;
    font-size: 18px;
    color: #333;
    margin: 10px 18px;
    text-align: left;
    line-height: 24px;
    height: 24px;
    font-weight: bold;
    &::before {
      content: '';
      width: 4px;
      position: absolute;
      height: 20px;
      top: 2px;
      left: -18px;
      background-color: #06c1ae;
    }
  }
  ::v-deep .mara-form-item {
    display: flex;
    justify-content: left;
    align-items: center;
    .mtd-form-item-label {
      font-size: 20px;
      font-family: 'Times New Roman', Times, serif;
    }
  }
}
</style>
