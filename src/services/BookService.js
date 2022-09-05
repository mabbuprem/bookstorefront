import { postService } from './Axios_service'
import { getService } from './Axios_service'
//  import { deleteService } from './Axios_service'


export function GetAllNotes() {
  let token = localStorage.getItem('token')
  console.log(token)
  let authOption = {
    headers: {
      'Authorization': "Bearer " + token,
      'content-Type': 'application/json'
    }
  }
  return getService('/getAllNotes', true, authOption)
}