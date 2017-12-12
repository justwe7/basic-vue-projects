import http from '@/axios';
import {commonParams,RES_OK_CODE,RES_ERR_CODE} from './config';

export const RES_OK = RES_OK_CODE;//设置两个全局相应的状态值
export const RES_ERR = RES_ERR_CODE;

export function httpLogout() {
  const url = '/upload';

  const data = Object.assign({}, commonParams);

  return http.post(url,data).then(function (response) {
    return Promise.resolve(response.data)
  }).catch(function (error) {
    return Promise.reject(response.data)
  });
}