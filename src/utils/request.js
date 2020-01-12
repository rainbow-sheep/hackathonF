const server = "https://api.palp.tech/";
import axios from 'axios';
import QS from 'qs';
import { Notification } from "element-ui"

axios.defaults.baseURL = server;
axios.defaults.timeout = 10000;


export function request(method, url, params){
  if(method === 'get'){
    return get(url, params);
  }else if(method === 'post'){
    return post(url, params);
  } else if(method === 'patch'){
    return patch(url, params);
  } else if(method === 'delete'){
    return del(url, params);
  } else if(method === 'json'){
    return json(url, params);
  }
}

function get(url, params){
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  return new Promise((resolve, reject) =>{
    axios.get(url, params).then(res =>{
      resolve(res);
    }).catch(err =>{
      reject(err);
    })
  });
}

function post(url, params){
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  return new Promise((resolve, reject) =>{
    axios.post(url, QS.stringify(params)).then(res =>{
      resolve(res);
    }).catch(err =>{
      reject(err);
    })

  });
}

function json(url, params){
  axios.defaults.headers.post['Content-Type'] = "application/json";
  return new Promise((resolve, reject) =>{
    axios.post(url, params).then(res =>{
      resolve(res);
    }).catch(err =>{
      reject(err);
    })

  });
}

function patch(url, params, forbid){
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  return new Promise((resolve, reject) =>{
    axios.patch(url, QS.stringify(params)).then(res =>{
      resolve(res);
    }).catch(err =>{
      reject(err);
    })

  });
}

function del(url, params){
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  return new Promise((resolve, reject) =>{
    axios.delete(url, {params: params}).then(res =>{
      resolve(res);
    }).catch(err =>{
      reject(err);
    })

  });
}
