/*PAGINATION*/
import React, { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterVariables } from '../../reducers/filterVariables';

function PaginationRounded({page}) {
  const { numberOfPages } = useSelector(state => state.users)
  const filterVars = useSelector(state => state.filterVariables)
  return (
    <Pagination
      style={{ display: "inline-flex" }}
      count={numberOfPages}
      page={Number(page) || 1}
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/items?page=${item.page}&helper=${filterVars.helper}&raj_mistri=${filterVars.raj_mistri}&labour=${filterVars.labour}&painter=${filterVars.painter}&welder=${filterVars.welder}&tileGraniteWorkers=${filterVars.tileGraniteWorkers}`} />
      )}
    />
  );
}
export default PaginationRounded;