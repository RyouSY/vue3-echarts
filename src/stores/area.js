import { defineStore } from 'pinia'

export const useAreaStore = defineStore('area', {
  state: () => ({
    area: '中国'
  })
})

