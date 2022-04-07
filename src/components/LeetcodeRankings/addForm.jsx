import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "../UI/Button/Button";
import { useMutation, useQueryClient } from "react-query";

import { addRanks } from "./api";
import { useHistory } from "react-router-dom";

function AddForm() {
  const [Form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    branch: "CSE",
    year: "I",
  });

  const history = useHistory();
  const queryClient = useQueryClient();

  const handleChange = (e, type) => {
    setForm({
      ...Form,
      [type]: e.target.value,
    });
  };

  const mutation = useMutation(addRanks, {
    onSuccess: () => {
      queryClient.invalidateQueries("ranks");
      alert("Successfully added");
      history.push("/leetcode");
    },
    onError: (err) => {
      console.log(err);
      alert("Something went wrong!");
    },
  });

  return (
    <div className={styles.container}>
      <h1>Add Your Leetcode Ranking</h1>
      <p
        style={{
          opacity: 0.2,
          marginBottom: "50px",
        }}
      >
        You can add your Leetcode ranking by filling the form below.
      </p>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.inputLabel}>
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className={styles.input}
            onChange={(e) => handleChange(e, "name")}
            value={Form.name}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputLabel}>
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className={styles.input}
            onChange={(e) => handleChange(e, "email")}
            value={Form.email}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.inputLabel}>
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className={styles.input}
            onChange={(e) => handleChange(e, "username")}
            value={Form.username}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="branch" className={styles.inputLabel}>
            Branch
          </label>

          <select
            id="branch"
            className={styles.input}
            onChange={(e) => handleChange(e, "branch")}
            value={Form.branch}
          >
            {["CSE", "ECE", "EE", "ME", "CE", "Other"].map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label
            htmlFor="year"
            placeholder="Year"
            className={styles.inputLabel}
          >
            Year
          </label>
          <select
            id="year"
            className={styles.input}
            value={Form.year}
            onChange={(e) => {
              handleChange(e, "year");
            }}
          >
            {["I", "II", "III", "IV"].map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>

        <Button
          style={{
            marginTop: "2rem",
            borderRadius: "0.5rem",
            border: "none",
          }}
          onClick={(e) => {
            e.preventDefault();
            mutation.mutate(Form);
          }}
        >
          <span>Submit</span>
        </Button>
      </form>
    </div>
  );
}

export default AddForm;
