import React, { useState } from "react";
import Data from "./Data";
import styles from "../components/FAQ.module.css";

const FAQ = () => {
  const [select, setSelect] = useState(false);

  const toggle = (i) => {
    if (select === i) {
      return setSelect(true);
    }
    setSelect(i);
  };
  return (
    <div className={styles.accordian}>
      {Data.map((data, i) => {
        return (
          <React.Fragment key={data.key}>
            <div className={styles.item} onClick={() => toggle(i)}>
              <h1 className={styles.question}>{data.question}</h1>
              <span>{select === i ? "-" : "+"}</span>{" "}
            </div>
            <p className={select === i ? styles.show : styles.answer}>{data.answer}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default FAQ;
