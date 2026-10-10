// Server-safe v-click-outside directive
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted(el: any, binding) {
      // Only attach on client — no document on server
      if (typeof document === 'undefined') return
      el.__ClickOutsideHandler__ = (event: Event) => {
        if (!(el === event.target || el.contains(event.target as Node))) {
          binding.value(event)
        }
      }
      document.addEventListener('click', el.__ClickOutsideHandler__)
    },
    unmounted(el: any) {
      if (typeof document === 'undefined') return
      if (el.__ClickOutsideHandler__) {
        document.removeEventListener('click', el.__ClickOutsideHandler__)
        delete el.__ClickOutsideHandler__
      }
    },
    getSSRProps() {
      return {}
    },
  })
})
