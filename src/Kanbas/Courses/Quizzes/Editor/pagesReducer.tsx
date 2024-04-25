import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  page: "details",
}

const pagesSlicer = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    },
  },
})

export const { setPage } = pagesSlicer.actions
export default pagesSlicer.reducer
