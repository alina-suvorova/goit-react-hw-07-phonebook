import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mockApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6267d606786383364225c656.mockapi.io/api/contacts/',
  }),
  tagTypes: ['Contacts'], endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts/`, providesTags: ['Contacts']
    }),
    deleteContactById: builder.mutation({
      query: id => ({  url: `contacts/${id}`, method: 'DELETE'}), invalidatesTags: ['Contacts']
    }),
    postContact: builder.mutation({
      query: contact => ({ url: 'contacts/', method: 'POST', body: contact }), invalidatesTags: ['Contacts']
    })
  })
});

export const { useGetContactsQuery, useDeleteContactByIdMutation, usePostContactMutation, } = mockApi;
