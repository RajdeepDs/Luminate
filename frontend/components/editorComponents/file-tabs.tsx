"use client";
import { useDispatch, useSelector } from "react-redux";
import { openTab, activateTab, closeTab } from "@/redux/actions/tabActions";
import { RootState } from "@/redux/store";
import { Icons } from "../icon";

interface TabProps {
  id: string;
  title: string;
}

export default function FileTabs() {
  const dispatch = useDispatch();
  const { openTabs, activeTab } = useSelector(
    (state: RootState) => state.root.tabs,
  );
  const handleTabClick = (tabId: string) => {
    dispatch(activateTab(tabId));
  };

  const handleTabClose = (tabId: string) => {
    dispatch(closeTab(tabId));
  };

  const handleNewTab = () => {
    const newTab: TabProps = {
      id: `file_${Math.random().toString(36).substring(7)}`,
      title: `Untitled File`,
    };
    dispatch(openTab(newTab));
  };
  return (
    <div className="flex">
      {openTabs.map((tab: TabProps) => (
        <div
          key={tab.id}
          className={`${
            tab.id === activeTab ? "bg-blueGray/80" : "hover:bg-blueGray/30"
          } flex cursor-pointer items-center gap-1 rounded-sm bg-[#0C0C26] px-2 py-1 `}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.title}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleTabClose(tab.id);
            }}
          >
            <Icons.close className="h-3 w-3 cursor-pointer rounded-sm hover:bg-blueGray" />
          </button>
        </div>
      ))}
      <button onClick={handleNewTab}>
        <Icons.plus className="h-5 w-5 cursor-pointer rounded-sm p-1 hover:bg-blueGray" />
      </button>
    </div>
  );
}
