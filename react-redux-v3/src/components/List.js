import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchForms, deleteForm } from "../store/user/thunk";
import { Link } from "react-router-dom";
import PopUp from "./shared/PopUp";
import RowItem from "./shared/RowItem";
import Pagination from "./shared/Pagination";
import Search from "./Search";
import { ListGroup, ListGroupItem, Input, Button } from "reactstrap";
import { URL } from "./shared/api";

const List = ({ forms, fetchForms, deleteForm }) => {
  const [checkedForm, setCheckedForm] = useState([]);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const value = await fetchForms(
        `${URL}?_page=${page}&_limit=5&_sort=lastModifiedDate&_order=desc`
      );
      setTotal(value);
    }
    fetchData();
    // eslint-disable-next-line
  }, [page]);

  const onSingleChecked = (e, id) => {
    if (e.target.checked) {
      setCheckedForm([...checkedForm, id]);
    } else {
      setCheckedForm(checkedForm.filter((d) => d !== id));
    }
  };

  const onMultipleChecked = (e) => {
    let newArr = [];
    if (e.target.checked) {
      newArr = forms.map((d) => {
        return d.id;
      });
    }
    setCheckedForm(newArr);
  };

  return (
    <ListGroup
      className="ml-2"
      style={{ maxWidth: "55rem", textAlign: "center", marginLeft: "0" }}
    >
      <div style={{ textAlign: "left", marginBottom: 20 }}>
        <Button color="danger" onClick={toggle}>
          Delete Selected
        </Button>
        <Search />

        <PopUp
          toggle={toggle}
          modal={modal}
          title="Confirming delete"
          content="Are you sure to delete the record?"
          option1="yes"
          option2="No"
          next={() => {
            forms.forEach((d) => {
              if (checkedForm.find((x) => x === d.id)) {
                deleteForm(d.id);
              }
              toggle();
            });
          }}
        />
      </div>

      <ListGroupItem key="3">
        <RowItem
          col1={
            <Input
              type="checkbox"
              onChange={(e) => {
                onMultipleChecked(e);
              }}
            />
          }
          col2="Description"
          col3="Category"
          col4="Operate"
        />
      </ListGroupItem>

      {forms.map((form) => (
        <ListGroupItem key={form.id}>
          <RowItem
            col1={
              <Input
                onChange={(e) => {
                  onSingleChecked(e, form.id);
                }}
                type="checkbox"
                checked={!!checkedForm.find((d) => d === form.id)}
              />
            }
            col2={
              <Link to={`/todo/${form.id}`} style={{ color: "black" }}>
                {form.description}
              </Link>
            }
            col3={form.category}
            col4={
              <Button color="danger" onClick={toggle}>
                Delete
              </Button>
            }
          />
        </ListGroupItem>
      ))}

      {total > 0 && <Pagination total={total} onSelected={(n) => setPage(n)} />}
    </ListGroup>
  );
};

const mapStateToProps = (state) => ({
  forms: state.user.forms,
});

const mapDispatchToProps = (dispatch) => ({
  fetchForms: (page) => dispatch(fetchForms(page)),
  deleteForm: (id) => dispatch(deleteForm(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
