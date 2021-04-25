import React from "react";
import { usePagination } from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
// import api, { URL } from "./api";

// let totalNumber = 0;
// api.get(`${URL}?_page=${1}&_limit=5`).then((res) => {
//   totalNumber = res.headers["x-total-count"];
// });

const useStyles = makeStyles({
  ul: {
    listStyle: "none",
    padding: 5,
    margin: 0,
    display: "flex",
  },
  button: {
    border: 1,
    borderRadius: 3,
    margin: 1,
  },
});

export default function Pagination({ onSelected, total }) {
  const classes = useStyles();
  const { items } = usePagination({
    count: total,
    onChange: (e, item) => {
      onSelected(item);
    },
  });

  return (
    <nav>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                className={classes.button}
                style={{ fontWeight: selected ? "bold" : undefined }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" className={classes.button} {...item}>
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
}
