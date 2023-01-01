import axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.unsplash.com/`,
  headers: {
    Authorization: `Client-ID ${'9SgpxKAS88GSwQSU0icRPvguuqnOnHm5VUf91RJsckg'}`,
  },
});

export default instance;
