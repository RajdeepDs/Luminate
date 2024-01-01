import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface File {
  id: string;
  name: string;
  path: string;
  type: "file" | "folder";
  language?: string;
  content?: string;
}

interface FilesState {
  openFiles: File[];
  activeFile: string | null;
}

const initialState: FilesState = {
  openFiles: [],
  activeFile: null,
};

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    openFile: (state, action: PayloadAction<File>) => {
      state.openFiles.push(action.payload);
      state.activeFile = action.payload.id;
    },
    closeFile: (state, action: PayloadAction<string>) => {
      state.openFiles = state.openFiles.filter(
        (file) => file.id !== action.payload,
      );
      if (state.activeFile === action.payload) {
        state.activeFile = null;
      }
    },
    activateFile: (state, action: PayloadAction<string>) => {
      state.activeFile = action.payload;
    },
  },
});

export const { openFile, closeFile, activateFile } = fileSlice.actions;

export default fileSlice.reducer;
