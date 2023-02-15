<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="form-query w-full border roundef  flex">
    <ElForm class="w-full" :model="model" v-bind="$attrs" ref="formRef">
      <ElRow type="flex" :gutter="30">
        <ElCol :span="6" v-for="(item, index) in items" :key="item.prop" v-show="(index < 3 || isUnFold)">
          <ElFormItem v-bind="getFormItemAttrs(item)">
            <slot v-if="item.slot" :name="item.slot" :item="item"></slot>
            <component v-else :is="item.el" v-bind="item.attrs" v-model="model[item.prop]">
            </component>
          </ElFormItem>
        </ElCol>
        <ElCol :span="isUnFold ? 24 : 6" class="flex justify-end">
          <ElFormItem>
            <ElButton type="primary" icon="Search" @click="onSearch">搜索</ElButton>
            <ElButton icon="Delete" @click="reset(formRef)">重置</ElButton>
            <ElButton type="primary" link @click="isUnFold = !isUnFold">{{ isUnFold? '合并': '展开' }}
              <ElIcon class="ml-1">
                <ArrowUp v-if="isUnFold" />
                <ArrowDown v-else />
              </ElIcon>
            </ElButton>
          </ElFormItem>
        </ElCol>
      </ElRow>
    </ElForm>
  </div>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>

<script setup lang='ts'>
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'

defineProps({
  items: {
    type: Array as any,
    default: () => {
      return []
    }
  },
  model: {
    type: Object as any,
    default: () => {
      return {}
    }
  },
})
const formRef = ref()
// const ruleFormRef = ref()
const emit = defineEmits(['search'])
let isUnFold = ref(false)

function reset(formRef: FormInstance) {
  if (!formRef) return
  formRef.resetFields()
}
function getFormItemAttrs(item: any) {
  let obj = {} as any
  let keys = ['label', 'prop', 'required', 'labelWidth', 'rules', 'error', 'showMessage', 'inlineMessage', 'size']
  for (const key in item) {
    if (keys.includes(key)) {
      obj[key] = item[key]
    }
  }
  if (obj.required) {
    obj.required = undefined
    if (obj.rules) {
      if (Array.isArray(obj.rules)) {
        obj.rules.push({ required: true, message: `${obj.label}必填`, trigger: 'blur' })
      }
      if (obj.rules instanceof Object) {
        obj.rules = [
          obj.rules,
          { required: true, message: `${obj.label}必填`, trigger: 'blur' }
        ]
      }
    }
  }
  return obj
}

function onSearch() {
  if (formRef.value) {
    formRef.value.validate().then(() => {
      emit('search')
    })
  }
}

</script>

<style lang='scss'>
.form-query {
  padding: 18px 18px 0px;

  .el-date-editor,
  .el-select {
    width: 100%;
  }
}
</style>