import { postService } from './Axios_service'
// import { getService } from './Axios_service'


export function registration(reqData) {
  let authOption = {
    Headers: {
      'Authorisation': 'token',
      'contant-Type': 'application/json'
    }
  }
  return postService('/register', reqData, false, authOption)
}

export function login(reqData) {
  let authOption = {
    Headers: {
      'Authorisation': 'token',
      'contant-Type': 'application/json'
    }
  }
  return postService('/login', reqData, false, authOption)
}

// export function forgetPass(reqData) {
//   let authOption = {
//     Headers: {
//       'Authorisation': 'token',
//       'contant-Type': 'application/json'
//     }
//   }
//   return postService('/forgotPassword', reqData, false, authOption)
// }


// export function ResetPass(reqData) {
//   let authOption = {
//     Headers: {
//       'Authorisation': 'token',
//       'contant-Type': 'application/json'
//     }
//   }
//   return postService('/resetPassword', reqData, false, authOption)
// }





