import { defineStore } from 'pinia'
import axios from 'axios'

const url_register = 'http://127.0.0.1:8000/api/register'

export const useUserAuth = defineStore('user', {
  state: () => ({
    form: {
      password: '',
      email: '',
      first_name: '',
      last_name: '',
      name: '',
      tel: ''
    },

    url: {
      register: url_register
    }
  }),

  actions: {
    async sendRegister(user_data) {
      this.form = user_data
      try {
        if (this.form) {
          let response = await axios.post(this.url.register, {
            password: this.form.password,
            name: this.form.name,
            email: this.form.email,
            tel: this.form.tel,
            first_name: this.form.first_name,
            last_name: this.form.last_name
          })
          if (response.status === 200) {
            return response.data
          } else {
          }
        }
      } catch (error) {
        console.log('useUserAuth@sendRegister ', error)
        return error
      }
    }
  }
})
