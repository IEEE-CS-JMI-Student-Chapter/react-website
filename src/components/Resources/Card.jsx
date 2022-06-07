import React from "react";
import styles from "./styles.module.scss";
function Card({ data, type, onClick }) {
  if (type === "file") {
    return (
      <div className={styles.card}>
        <div className={styles.cardbody}>
          <div className={styles.icon}>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <h5>{data.title}</h5>
        </div>
        <p onClick={() => onClick()}>Read More</p>
      </div>
    );
  }

  return (
    <div
      className={`${styles.card} ${styles.foldercard}`}
      onClick={() => onClick()}
    >
      <div className={styles.cardbody}>
        <div className={styles.icon}>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
          </svg>{" "}
        </div>
        <h5>{data.name}</h5>
      </div>
      <p onClick={() => onClick()}>See More</p>
    </div>
  );
}

export default Card;
