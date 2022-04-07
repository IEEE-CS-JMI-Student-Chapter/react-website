import React from "react";
import loading from "../../images/Loading.gif";
import styles from "./styles.module.css";

function Loading() {
  return (
    <div className={styles.container}>
      <img src={loading} className={styles.img} alt="loading" />
    </div>
  );
}

export default Loading;
