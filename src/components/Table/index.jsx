import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { IoCaretDownOutline } from "react-icons/io5";
import styles from "./styles.module.css";
import {
  HiChevronDoubleLeft,
  HiChevronLeft,
  HiChevronDoubleRight,
  HiChevronRight,
} from "react-icons/hi";

function Table({
  columns: userColumns,
  data,
  renderRowSubComponent,
  rootClassName,
  headerCellClassName,
  dataCellClassName,
  rowCellClassName,
  headerRowClassName,
  defaultSorted,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    visibleColumns,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: userColumns,
      data,
      initialState: { pageIndex: 0, sortBy: defaultSorted },
    },
    useSortBy,
    usePagination
    // for sub components too!
  );

  return (
    <>
      {/* <pre>
        <code>{JSON.stringify({ expanded: expanded }, null, 2)}</code>
      </pre> */}
      <table {...getTableProps()} className={rootClassName}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className={headerRowClassName}
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={headerCellClassName}
                >
                  <span className={styles.container}>
                    {column.render("Header")}

                    <IoCaretDownOutline
                      style={{
                        opacity: column.isSorted ? 1 : 0,
                        transform: column.isSorted
                          ? column.isSortedDesc
                            ? ""
                            : "rotate(180deg)"
                          : "translateX(-100%)",
                        margin: "10px 3px",
                        marginLeft: column.isSorted ? "0px" : "-20px",
                        transition: "all 0.2s ease-in-out",
                      }}
                    />
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          style={{
            marginTop: "20px",
          }}
        >
          {page.map((row, i) => {
            prepareRow(row);
            return (
              // Use a React.Fragment here so the table markup is still valid
              <React.Fragment key={i}>
                <tr className={rowCellClassName}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={dataCellClassName}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <br />
      <div className={`pagination ${styles.pagination}`}>
        <div
          style={{
            margin: "10px",
          }}
        >
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className={styles.button}
          >
            <HiChevronDoubleLeft />
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className={styles.button}
          >
            <HiChevronLeft />
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className={styles.button}
          >
            <HiChevronRight />
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className={styles.button}
          >
            <HiChevronDoubleRight />
          </button>
        </div>
        <span>
          Page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
      </div>
    </>
  );
}

export default Table;
