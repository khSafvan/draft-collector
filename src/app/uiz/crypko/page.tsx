"use client";
import React from "react";
import styles from "./styles.module.css";

function Crypko() {
  return (
    <div className={styles.stoneBox}>
      <div className={styles.cyanBox}>
        <div className={styles.whiteHeaderBox}>
          <div className={styles.preheader}></div>
          <div className={styles.headerBox}>
            {["Library", "Discover", "Rules", "FAQ", "Contact"].map((menu) => (
              <div>{menu}</div>
            ))}
          </div>
          <div className={styles.postheader}></div>
        </div>
      </div>
    </div>
  );
}

export default Crypko;
