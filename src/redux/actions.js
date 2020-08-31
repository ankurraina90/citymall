import { createSlice } from '@reduxjs/toolkit';

const saveDataReducer = (state, action) => {
  const { ListCats } = state;
  ListCats.push(action.payload);
  state.ListCats = ListCats;
};

const deleteDataReducer = (state, action) => {
  const { ListCats } = state;
  ListCats.splice(action.payload, 1);
  state.ListCats = ListCats;
};

const catsSlice = createSlice({
  name: 'cats',
  initialState: {
    ListCats: [],
  },
  reducers: {
    saveData: saveDataReducer,
    deleteData: deleteDataReducer,
  },
});

const { saveData, deleteData } = catsSlice.actions;

const select_Cats = ({ cats }) => cats.ListCats;

const ReduceCats = catsSlice.reducer;

export { saveData, deleteData, select_Cats, ReduceCats };
