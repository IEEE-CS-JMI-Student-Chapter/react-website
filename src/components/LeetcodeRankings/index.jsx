/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Loading from "../Loading";
import { useQuery } from "react-query";
import { getRanks, dummyData } from "./api.js";
import Table from "../Table";
import Button from "../UI/Button/Button";
import { useHistory } from "react-router-dom";
import ReactTooltip from "react-tooltip";

function LCRankings() {
  const { data, status } = useQuery(["ranks"], getRanks);
  const history = useHistory();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  console.log("Ranks Data : ", data.data);
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
      defaultCanSort: true,
      isSorted: true,
      isSortedDesc: true,
    },
    {
      Header: "Total Solved",
      accessor: "totalSolved",
      Cell: ({ row }) => {
        return (
          <span>
            <a
              data-tip
              data-for={row.original.username}
              style={{
                cursor: "pointer",
              }}
            >
              {row.original.totalSolved}
            </a>
            <ReactTooltip
              place="bottom"
              effect="solid"
              type="light"
              id={row.original.username}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "150px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <span
                    style={{
                      width: "80%",
                      textAlign: "left",
                    }}
                  >
                    Easy Solved :{" "}
                  </span>
                  <span>{row.original.easySolved}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      width: "80%",
                      textAlign: "left",
                    }}
                  >
                    Medium Solved :{" "}
                  </span>
                  <span>{row.original.mediumSolved}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <span
                    style={{
                      width: "80%",
                      textAlign: "left",
                    }}
                  >
                    Hard Solved :{" "}
                  </span>
                  <span>{row.original.hardSolved}</span>
                </div>
              </div>
            </ReactTooltip>
          </span>
        );
      },
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

      <p
        className={styles.info}
        style={{
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Last Updated : {data.lastUpdated}
      </p>
      <p className={styles.info}>
        *Data will refresh in {data.timeleft} minutes
      </p>

      <div className={styles.tableWeapper}>
        <Table
          columns={columns}
          data={data.data}
          rootClassName={styles.table}
          headerRowClassName={styles.headerRow}
          rowCellClassName={styles.rowCell}
          dataCellClassName={styles.cellClass}
          defaultSorted={[
            {
              id: "ranking",
              desc: false,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default LCRankings;
