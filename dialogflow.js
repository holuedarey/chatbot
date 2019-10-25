<<<<<<< HEAD
const axios = require('axios')

const accessToken = process.env.DIALOGFLOW_ACCESS_TOKEN
const baseURL = 'https://api.dialogflow.com/v1/query?v=20150910'

module.exports = {
  send (message) {
    const data = {
      query: message,
      lang: 'en',
      sessionId: '123456789!@#$%'
    }

    return axios.post(baseURL, data, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
  }
=======
const axios = require('axios')

const accessToken = process.env.DIALOGFLOW_ACCESS_TOKEN
const baseURL = 'https://api.dialogflow.com/v1/query?v=20150910'

module.exports = {
  send (message) {
    const data = {
      query: message,
      lang: 'en',
      sessionId: '123456789!@#$%'
    }

    return axios.post(baseURL, data, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
  }
>>>>>>> 8f237653135d5e4e3e2562819d1f34b124004f5d
}