<template>
  <mara-field v-bind="$attrs" class="mara-container-y-wrapper">
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
  name: 'mara-container-y',
  props: {
    title: { type: String },
  },
})
</script>
<style scoped lang="scss">
.mara-container-y-wrapper ~ .mara-container-y-wrapper {
  margin-top: 30px;
}
.mara-container-y-wrapper {
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
      box-shadow: 8px 6px 5px #333333;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .mtd-form-item-content {
      margin-left: 120px !important;
    }
    .mtd-form-item-content::before {
      content: '';
      position: absolute;
      border-color: #009933;
      border-style: solid;
      border-width: 0 8px 10px 0;
      height: 32px;
      top: -4px;
      left: -32px;
      transform: rotate(45deg);
      width: 16px;
    }
  }
}
</style>
