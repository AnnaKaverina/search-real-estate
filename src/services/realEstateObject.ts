// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RealEstateObject } from '../types/realEstateObjects'

export interface Filter {
  start: number
  limit: number
  withHouse: boolean | null
  costs: number[]
  landplotSquare: number[]
  houseSquare: number[] | null
}

export interface GetRealEstateObjectsResponse {
  list: RealEstateObject[]
  totalSize: number
}

// Define a service using a base URL and expected endpoints
export const realEstateObjectsApi = createApi({
  reducerPath: 'realEstateObjectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    // getRealEstateObjects: builder.query<RealEstateObject, string>({
    //   query: (name) => `pokemon/${name}`,
    // }),
    getRealEstateObjects: builder.query<GetRealEstateObjectsResponse, Filter>({
      query: (body) => ({ url: 'realEstateObjects', method: 'POST', body }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRealEstateObjectsQuery, useLazyGetRealEstateObjectsQuery } = realEstateObjectsApi
