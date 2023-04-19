import { instance } from '../../common/api/api'

export const loginApi = {
  login(registerData: { email: string; password: string }) {
    return instance.post('auth/register', registerData)
  },
}
