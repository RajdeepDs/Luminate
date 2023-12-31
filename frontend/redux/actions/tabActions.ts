import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Tab {
  id: string;
  title: string;
  content?: string;
}

interface TabsState {
  openTabs: Tab[];
  activeTab: string | null;
}

const initialState: TabsState = {
  openTabs: [],
  activeTab: null,
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    openTab: (state, action: PayloadAction<Tab>) => {
      state.openTabs.push(action.payload);
      state.activeTab = action.payload.id;
    },
    closeTab: (state, action: PayloadAction<string>) => {
      state.openTabs = state.openTabs.filter(
        (tab) => tab.id !== action.payload,
      );
      if (state.activeTab === action.payload) {
        state.activeTab = null;
      }
    },
    activateTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { openTab, closeTab, activateTab } = tabsSlice.actions;

export default tabsSlice.reducer;
