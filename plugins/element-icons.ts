import {
  Message,
  LocationInformation,
  Phone,
  Right,
} from '@element-plus/icons-vue'

export default defineNuxtPlugin((nuxtApp) => {
  const icons = { Message, LocationInformation, Phone, Right }
  for (const [name, comp] of Object.entries(icons)) {
    nuxtApp.vueApp.component(name, comp)
  }
})
