import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RealEstateObject } from '../../types/realEstateObjects'

export interface RealEstateObjectsState {
    realEstateObjects: RealEstateObject[]
}

const initialState: RealEstateObjectsState = {
    realEstateObjects: []
}

export const realEstateObjectsSlice = createSlice({
  name: 'realEstateObjects',
  initialState,
  reducers: {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    setRealEstateObjects: (state, action: PayloadAction<RealEstateObject[]>) => {
      state.realEstateObjects = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRealEstateObjects } = realEstateObjectsSlice.actions

export default realEstateObjectsSlice.reducer
