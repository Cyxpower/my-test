import {
    ref, watchEffect
} from "vue";

const theme = ref(localStorage.getItem('___theme___') || 'light')
const STORE_KEY = '___theme___'
watchEffect(() => {
    document.documentElement.dataset.theme = theme.value
    localStorage.setItem(STORE_KEY, theme.value)
})
export function useTheme() {
    return {
        theme
    }
}