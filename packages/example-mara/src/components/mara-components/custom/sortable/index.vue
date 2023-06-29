<template>
  <div class="mara-custom-sortable">
    <div v-for="(field, idx) in options" :key="field.value" class="field">
      <mtd-tag v-if="idx" theme="gray" type="unbordered">|</mtd-tag>
      <span
        :class="[
          'label',
          parsedValue.sortField === field.value && parsedValue.sortType !== '' ? 'label__selected' : '',
        ]"
        @click="change(field.value)"
        >{{ field.label }}</span
      >
      <span class="sortable" @click="change(field.value)">
        <i
          :class="[
            'sortable-icon',
            'sortable-ascending',
            parsedValue.sortField === field.value && parsedValue.sortType === 'asc'
              ? 'sortable-ascending__selected'
              : '',
          ]"
        />
        <i
          :class="[
            'sortable-icon',
            'sortable-descending',
            parsedValue.sortField === field.value && parsedValue.sortType === 'desc'
              ? 'sortable-descending__selected'
              : '',
          ]"
        />
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api'

const STATUS_DESC = 'desc'
const STATUS_ASC = 'asc'
const STATUS_NONE = ''
export default defineComponent({
  name: 'sortable',
  props: {
    value: String,
    maraForm: Object,
    options: Array,
  },
  setup(props, { emit }) {
    const defaultValue = JSON.stringify({ sortField: '', sortType: STATUS_NONE })
    const parsedValue = ref(JSON.parse(defaultValue))
    const nextStatus = (currentField: string, nextField: string, currentStatus: string) => {
      if (currentField !== nextField) return STATUS_DESC
      switch (currentStatus) {
        case STATUS_NONE:
          return STATUS_DESC
        case STATUS_DESC:
          return STATUS_ASC
        default:
          return STATUS_NONE
      }
    }
    const change = (sortField: string) => {
      const currentStatus = parsedValue.value.sortType
      const currentField = parsedValue.value.sortField
      emit('input', JSON.stringify({ sortField, sortType: nextStatus(currentField, sortField, currentStatus) }))
    }
    watch(
      () => props.value,
      () => {
        parsedValue.value = JSON.parse(props.value || defaultValue)
      },
      {
        deep: true,
        immediate: true,
      },
    )
    return {
      change,
      parsedValue,
    }
  },
})
</script>
<style lang="scss" scoped>
.mara-custom-sortable {
  vertical-align: middle;
  display: flex;
  height: 30px;
  line-height: 30px;
  align-content: center;
  .field {
    position: relative;
    user-select: none;
    .label {
      cursor: pointer;
      vertical-align: middle;
      &__selected {
        color: #004099;
        font-weight: 500;
      }
    }
    .sortable {
      cursor: pointer;
      height: 20px;
      width: 6px;
      display: inline-block;
      margin-left: 8px;
      vertical-align: middle;
      position: relative;
      &-icon {
        width: 0;
        height: 0;
        border-left: 3px solid rgba(0, 0, 0, 0);
        border-right: 3px solid rgba(0, 0, 0, 0);
        position: absolute;
      }
      &-ascending {
        border-bottom: 6px solid #cdd1d9;
        border-top: none;
        top: 3px;
      }
      &-ascending__selected {
        border-bottom: 6px solid #004099;
      }
      &-descending {
        border-top: 6px solid #cdd1d9;
        border-bottom: none;
        bottom: 3px;
      }
      &-descending__selected {
        border-top: 6px solid #004099;
      }
    }
  }
}
::v-deep {
  .mtd-tag {
    cursor: pointer;
    pointer-events: none;
  }
}
</style>
