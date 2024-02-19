import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', {
  state: () => ({
    dYear: '',
    dMonth: '',
    dWeek: '',
    dDay: '',
    dHour: '',
    dMin: '',
    dS: '',

  })
})

