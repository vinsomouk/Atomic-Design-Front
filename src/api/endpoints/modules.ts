import { apiSlice } from "../apiSlice"

export const modulesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getModules: builder.query<any, void>({
        query: () => '/api/modules',
        providesTags: [{ type: 'Modules', id: 'LIST' }],
      })
    }),
})

export const { useGetModulesQuery } = modulesApi