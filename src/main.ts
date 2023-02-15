import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './styles/tailwind.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import '@/api/mock'
import WzElSelect from '@/components/WzElSelect.vue';
import WzElTable from '@/components/WzElTable.vue'
import WzElForm from '@/components/WzElForm.vue'
import WzElCheckBox from '@/components/WzElCheckBox.vue'
import WzElRadio from '@/components/WzElRadio.vue'





const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('wzel-select',WzElSelect)
app.component('wzel-table',WzElTable)
app.component('wzel-form',WzElForm)
app.component('wzel-checkbox',WzElCheckBox)
app.component('wzel-radio',WzElRadio)



app.use(createPinia())
app.use(router)
app.use(ElementPlus,{locale: zhCn})

app.mount('#app')
