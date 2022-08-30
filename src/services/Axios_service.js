import axios from 'axios'

const BaseUrl = 'http://localhost:8081/api';

export  function postService(url, reqpayload, token, httpAuthOptions) {
  return axios.post(BaseUrl + url, reqpayload, token && httpAuthOptions)
}
