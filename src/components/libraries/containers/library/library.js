import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../../../../redux/actions';
import Library from '../../components';

export default function LibraryContainer({ id }) {
  const library = useSelector((state) => state.libraries[id]);
  const dispatch = useDispatch();

  const onAddLibraryClick = useCallback(
    (id) => {
      dispatch({ type: ACTIONS.ADD_LIBRARY, payload: { id } });
    },
    [dispatch]
  );

  const onRemoveLibraryClick = useCallback(
    (id) => {
      dispatch({ type: ACTIONS.REMOVE_LIBRARY, payload: { id } });
    },
    [dispatch]
  );

  return (
    <Library
      id={id}
      {...library}
      onAddClick={onAddLibraryClick}
      onRemoveClick={onRemoveLibraryClick}
    />
  );
}

LibraryContainer.propTypes = {
  id: PropTypes.string.isRequired
};
