import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const billingsApi = createApi({
    reducerPath: 'billingsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    tagTypes: ['Billings'],
    endpoints: (builder) => ({
        getBillings: builder.query({
            query: (page) => ({
                headers: { 'Authorization': `Bearer ${localStorage?.getItem("accessToken")}` },
                url: `/billing-list?page=${page}&limit=10`,
            }),
            providesTags: ['Billings']
        }),


        getSingleBillings: builder.query({
            query: (id) => ({
                url: `/billing-single/${id}`,
                headers: { 'Authorization': `Bearer ${localStorage?.getItem("accessToken")}` },
            }),
            providesTags: ['Billings']
        }),


        addBillings: builder.mutation({
            query: (data) => ({
                url: '/add-billing',
                method: 'POST',
                headers: { 'Authorization': `Bearer ${localStorage?.getItem("accessToken")}` },
                body: data,
            }),
            invalidatesTags: ['Billings']
        }),

        deleteBillings: builder.mutation({
            query: (id) => ({
                url: `/delete-billing/${id}`,
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${localStorage?.getItem("accessToken")}` },
            }),
            invalidatesTags: ['Billings']
        }),

        updateBillings: builder.mutation({
            query: ({ fullName, email, phone, paidAmount, id, }) => ({
                url: `/update-billing/${id}`,
                method: 'PATCH',
                headers: { 'Authorization': `Bearer ${localStorage?.getItem("accessToken")}` },
                body: { fullName, email, phone, paidAmount },
            }),
            invalidatesTags: ['Billings']
        }),


    })
})

export const { useGetBillingsQuery, useAddBillingsMutation, useDeleteBillingsMutation, useUpdateBillingsMutation, useGetSingleBillingsQuery } = billingsApi;