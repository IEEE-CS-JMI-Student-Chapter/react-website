import React, { useState } from "react";
// import styled from 'styled-components';
import TabButton from "./TabButton";
import classes from "./TeamsSection.module.css";
import tabs from "./TabData";
import TabContent from "./TabContent";

const TeamsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  console.log(activeTab);
  return (
    <section id="teams-section" className={classes["teams-sec-container"]} id="teams">
      <div className={classes["team-container"]}>
        <div className={classes["button-container"]}>
          {tabs.map((tab) => {
            return (
              <TabButton id={tab.id} key={tab.id} activeTab={activeTab === tab.id} setActiveTab={setActiveTab}>
                {tab.title}
              </TabButton>
            );
          })}
        </div>
        <TabContent {...tabs[activeTab]} />
      </div>
    </section>
  );
};

export default TeamsSection;
