import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["User"],
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getTasks` endpoint is a "query" operation that returns data
    getUsers: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => `/user/getusers`,
      providesTags: ["User"],
    }),
    getUser: builder.query({
      query: (userId) => `/user/${userId}`,
      providesTags: (result, error, arg) => [{ type: "User", id: arg }],
    }),
    editUser: builder.mutation({
      query: (user) => ({
        url: `/user/update/${user._id}`,
        method: "PATCH",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (user) => ({
        url: `/user/delete/${user._id}`,
        method: "DELETE",
        body: user,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/user/register",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/user/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    logoutUser: builder.mutation({
      query: (user) => ({
        url: "/user/logout",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
// Export the auto-generated hook for the `getTasks` query endpoint
export const {
  useGetUsersQuery,
  useGetUserQuery,
  useEditUserMutation,
  useDeleteUserMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = apiSlice;
