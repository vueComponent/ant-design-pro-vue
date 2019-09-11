import api from './index'
import { axios } from '@/utils/request'

export function submit(params) {
  return axios({
    url: '/basis/saveBasis',
    method: 'post',
    data: params
  })
}

export function getElementsAnswer(params) {
  return axios({
    url: '/basisMask/getElementsAnswer',
    method: 'post',
    data: params
  })
}
//获得省市
export function getProvinceAndCity() {
  return axios({
    url: '/dictionaryAttribute/getProvinceAndCity',
    method: 'post'
  })
}
//获得民族
export function getNation() {
  return axios({
    url: '/dictionaryAttribute/getNation',
    method: 'post'
  })
}
//根据字典ID获得内容
export function getDictionaryAttributeByDictionaryId(params) {
  return axios({
    url: '/dictionaryAttribute/getDictionaryAttributeByDictionaryId',
    method: 'post',
    data: params
  })
}
//提交患者信息
export function addOrUpdate(params) {
  return axios({
    url: '/patient/addOrUpdate',
    method: 'post',
    data: params
  })
}

export function getPatientBasis(params) {
  return axios({
    url: '/basis/getPatientBasis',
    method: 'post',
    data: params
  })
}

export function computeScore(params) {
  return axios({
    url: '/basis/computeScore',
    method: 'post',
    data: params
  })
}

export function getMedicineAllergyList(params) {
  return axios({
    url: '/basis/getMedicineAllergyList',
    method: 'post',
    data: params
  })
}

export function getAllQuestionList(params) {
  return axios({
    url: '/question/detail',
    method: 'post',
    data: params
  })
}

export function getTaskDetail(params) {
  return axios({
    url: '/visitTask/getVisitTaskDetail',
    method: 'post',
    data: params
  })
}

export function saveQuestion(params) {
  return axios({
    url: '/question/save',
    method: 'post',
    data: params
  })
}

export function getCollectDetail(params) {
  return axios({
    url: '/reportCollectBase/getByBasisElementId',
    method: 'post',
    data: params
  })
}

export function addVasit(params) {
  return axios({
    url: '/visitTask/addVasit',
    method: 'post',
    data: params
  })
}

export function getCollectElements(params) {
  return axios({
    url: '/reportCollectBase/getBasisElementById',
    method: 'post',
    data: params
  })
}

export function saveReport(params) {
  return axios({
    url: '/reportCollectBase/addOrEditReportResult',
    method: 'post',
    data: params
  })
}

export function getVtList(params) {
  return axios({
    url: '/visitTask/getVtList',
    method: 'post',
    data: params
  })
}

export function importVtData(params) {
  return axios({
    url: '/visitTask/importVtData',
    method: 'post',
    data: params
  })
}

export function saveVisitTask(params) {
  return axios({
    url: '/visitTask/save',
    method: 'post',
    data: params
  })
}