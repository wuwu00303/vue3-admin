import { ref, watch, type Ref } from "vue";

export function setStorage(name: string, data: any, storage: string = 'localStorage') {
  if (data !=undefined || data !=null) {
    let obj = { value: data }
    if (storage === 'localStorage') { localStorage.setItem(name, JSON.stringify(obj)) }
    if (storage === 'sessionStorage') { sessionStorage.setItem(name, JSON.stringify(obj)) }
  }
}


export function getStorage(name: string, storage: string = 'localStorage') {
  let data = null
  if (storage === 'localStorage') {
    let value = localStorage.getItem(name);
    data = value ? JSON.parse(value) : null
  }
  if (storage === 'sessionStorage') {
    let value = sessionStorage.getItem(name);
    data = value ? JSON.parse(value) : null
  }
  return data ? data.value : null
}

export function userStorage<T>(name: string, data: T, storage: string = 'localStorage'): Ref<T> {
  let refdata = ref(getStorage(name) || data);
  let action = () => setStorage(name, refdata.value, storage)
  watch(refdata, action, { immediate: true, deep: true })
  return refdata
}


