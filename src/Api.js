import axiosLib from "axios"

export const axios = axiosLib.create({
  baseURL: "https://api.emimino.cz/v2/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json", // odpoved hlavicky co chci
  },
})

export const getCategories = () => {
  return axios.get(
    "/adscategories/",
  )
}

export const getCategoryId = (id) => {
  return axios.get(
    `/adscategories/${id}`,
    {
      params: {
        catID: id,
      },
    },
  )
}

export const getAds = (id) => {
  return axios.post(
    `/ads/`,
    {
      filters: {
        categoryId: id,
      },
    },
    {
      params: {
        offset: 0,
        count: 20,
      },
    },
  )
}