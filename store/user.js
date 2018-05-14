import { observable } from './tools'
import { apiLogin } from '../api/login'

class User {
  constructor() {
    observable(this, {
      info: {}
    })
  }

  login() {
    apiLogin()
  }
}
export default new User()
