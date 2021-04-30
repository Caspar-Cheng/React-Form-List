import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import useActions from './hooks/useActions';
import useSelector from './hooks/useSelector';
import RowGrid from './shared/RowGrid';
import AlertDialog from './shared/Dialog';
import Pagination from './shared/Pagination';
import Search from './shared/Search';
import { URL } from './shared/api';

const List: React.FC = () => {
  const { data, loading } = useSelector((state) => state.user);
  const { fetchForms, deleteForm } = useActions();
  const [checkedID, setCheckedID] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    async function fetchData() {
      const value = await fetchForms(
        `${URL}?_page=${page}&_limit=5&_sort=lastModifiedDate&_order=desc`
      );
      setTotal(value);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const onSingleChecked = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    if (event.target.checked) {
      setCheckedID([...checkedID, id]);
    } else {
      setCheckedID(checkedID.filter((d: string | number) => d !== id));
    }
  };

  const onCheckedAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newArr = [];
    if (event.target.checked) {
      newArr = data.map((form: { id: string }) => {
        return form.id;
      });
    }
    setCheckedID(newArr);
  };

  return (
    <>
      <Search />
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={toggle}
      >
        Delete Selected
      </Button>
      {loading && <p>deleting...</p>}
      <AlertDialog
        modal={modal}
        toggle={toggle}
        title="Confirm to delete."
        content="Are you sure to delete the selected data? "
        option1="Cancel"
        option2="Yes"
        next={() => {
          data.forEach((form: { id: string }) => {
            if (checkedID.find((x) => x === form.id)) {
              deleteForm(form.id);
            }
            toggle();
          });
        }}
      />
      <RowGrid
        col1="Description"
        col2="Category"
        col3="Operate"
        isList={false}
        onChecked={onCheckedAll}
      />
      {data.map(
        (form: { description: string; category: string; id: string }) => (
          <RowGrid
            col1={form.description}
            col2={form.category}
            isList
            id={form.id}
            onChecked={(e) => onSingleChecked(e, form.id)}
            onClick={toggle}
          />
        )
      )}
      {total > 0 && <Pagination total={total} onSelected={(n) => setPage(n)} />}
    </>
  );
};

export default List;
