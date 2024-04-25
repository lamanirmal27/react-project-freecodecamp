import { useState } from "react";
import "./tabs.css";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(-1);

  function handleClick(getIndex) {
    setCurrentTabIndex(getIndex);
    //onChange(getIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex]
          ? tabsContent[currentTabIndex].content
          : null}
      </div>
    </div>
  );
}
