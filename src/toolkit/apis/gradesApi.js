import { apiSlice } from '../apiSlice'


// api/grades/ ==>
const gradesApi = apiSlice.injectEndpoints({

    endpoints: builder => ({

        getGrades: builder.query({
            query: (queries) => {
                const { filter, sort } = queries
                let params = {}

                if (filter) params = { ...filter }
                if (sort) params = { ...sort }

                return {
                    url: "/grades",
                    params
                }
            },
        }),
        createGrade: builder.mutation({
            query: data => ({
                url: '/grades',
                method: 'POST',
                body: data
            }),
        }),
        updateGrade: builder.mutation({
            query: (data) => ({
                url: '/grades',
                method: 'PATCH',
                body: data
            }),
        }),
        deleteGrade: builder.mutation({
            query: data => ({
                url: '/grades',
                method: 'DELETE',
                body: data
            }),
        }),

    }),
    overrideExisting: false,
})

export const {
    useGetGradesQuery, useCreateGradeMutation, useUpdateGradeMutation, useDeleteGradeMutation,
} = gradesApi