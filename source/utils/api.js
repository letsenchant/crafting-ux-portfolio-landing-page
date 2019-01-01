import qs from "qs"
import devData from 'app/utils/devData'

const devUrl  = "http://localhost:3000/api/v1"
const prodUrl = ""
const baseUrl = process.env.NODE_ENV == 'production' ? prodUrl : devUrl

const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}

function apiCall(path, options, data) {
  options = { ...defaultOptions, ...options }

  const queryString = options.params ? qs.stringify(options.params) : null;
  let url = baseUrl + path;
  url = queryString ? `${url}?${queryString}` : url;

  if (data) { options.body = data; }
  // console.log("Fetching url and options: ", url, options)
  return fetch(url, options)
}
