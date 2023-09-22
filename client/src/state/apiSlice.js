import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: '' })

export const apiSlice = createApi({
    baseQuery,
    credentials: 'include',
    withCredentials: true,
    tagTypes: ['User', 'Post', 'Chat'],
    endpoints: () => ({})
})