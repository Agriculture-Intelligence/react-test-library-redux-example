import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface SearchState {
  entryValue: string
}

const initialState: SearchState = {
  entryValue: "",
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setEntryValue: (state, action: PayloadAction<string>) => {
      state.entryValue = action.payload
    },
    setResetSearch: (state, action: PayloadAction<string>) => {
      state.entryValue = ""
    },
  },
})

export const { setEntryValue, setResetSearch } = searchSlice.actions
