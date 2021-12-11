/*PAGINATION*/
import React, { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function PaginationRounded({page}) {
  const { numberOfPages } = useSelector(state => state.users)
  return (
    <Pagination
      style={{ display: "inline-flex" }}
      count={numberOfPages}
      page={Number(page) || 1}
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/items?page=${item.page}`} />
      )}
    />
  );
}
export default PaginationRounded;