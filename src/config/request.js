import { requestConfig, pageConfig, publishConfig } from './requestConfig'

export function allContent(path){
  return requestConfig(path)
}

export function filterContent(path,params){
  return pageConfig(path,params)
}

export function postContent(path,data) {
  return publishConfig(path,data)
}
