import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const userApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://billing-server.onrender.com/api' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({


        getMe: builder.query({
            query: (email) => ({
                url: `/get-me/${email}`
            }),
            invalidatesTags: ['User']
        }),
        register: builder.mutation({
            query: (data) => ({
                url: '/registration',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['User']
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['User']
        }),

        logout: builder.mutation({
            query: (email) => ({
                url: `/logout/${email}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['User']
        }),

    })
})

export const { useRegisterMutation, useLoginMutation, useGetMeQuery, useLogoutMutation } = userApi;