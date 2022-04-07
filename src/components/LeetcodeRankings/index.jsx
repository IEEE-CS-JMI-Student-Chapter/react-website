import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Loading from "../Loading";
import { useQuery } from "react-query";
import { getRanks, dummyData } from "./api.js";
import Table from "../Table";
import Button from "../UI/Button/Button";
import { useHistory } from "react-router-dom";

function LCRankings() {
  const { data, status } = useQuery(["ranks"], getRanks);
  const history = useHistory();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  console.log("Ranks Data : ", data);
  const columns = [
    {
      Header: "Name",
      accessor: "name",

      Cell: ({ row }) => {
        return (
          <div className={styles.name}>
            <span>{row.original.name}</span>
            <a
              className={styles.username}
              href={`https://leetcode.com/${row.original.username}`}
              target={`_blank`}
            >
              @{row.original.username}
            </a>
          </div>
        );
      },
    },
    {
      Header: "Branch",
      accessor: "branch",
    },
    {
      Header: "Rank",
      accessor: "ranking",
    },
    {
      Header: "Year",
      accessor: "year",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Leetcode Rankings</h1>
      <Button
        style={{
          border: "none",
          borderRadius: "6px",
          margin: 20,
        }}
        onClick={() => history.push("leetcode/add")}
      >
        Add your account
      </Button>

      <Table
        columns={columns}
        data={data}
        rootClassName={styles.table}
        headerRowClassName={styles.headerRow}
        rowCellClassName={styles.rowCell}
        dataCellClassName={styles.cellClass}
      />
    </div>
  );
}

export default LCRankings;
