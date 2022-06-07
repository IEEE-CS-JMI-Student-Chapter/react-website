import React from "react";
import ResourcesComponent from "../../components/Resources";
import styles from "./styles.module.scss";

function Resources() {
  return (
    <div className={styles.container}>
      <ResourcesComponent />
    </div>
  );
}

export default Resources;
