import axios from 'axios'

const api = axios.create({
  baseURL: 'https://event.hpcnt.com/game/',
  // params: { api_key: "b2ac366b32c763181997d8f9720226ab", language: "en-US" }
})

const gameApi = {
  start: (email, phone_number, username) =>
    api.post(``, {
      email,
      phone_number,
      username,
    }),

  submit: (id, number) =>
    api.post(`${id}/submit/`, {
      number, // str
    }),
}

export { gameApi }
