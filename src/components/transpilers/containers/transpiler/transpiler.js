import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../../../../redux/actions';
import Transpiler from '../../components/transpiler';

export default function TranspilerContainer({ id }) {
  const transpiler = useSelector((state) => state.transpilers[id]);
  const dispatch = useDispatch();

  const onAddTranspilerClick = useCallback(
    (id) => {
      dispatch({ type: ACTIONS.ADD_TRANSPILER, payload: { id } });
    },
    [dispatch]
  );

  const onRemoveTranspilerClick = useCallback(
    (id) => {
      dispatch({ type: ACTIONS.REMOVE_TRANSPILER, payload: { id } });
    },
    [dispatch]
  );

  return (
    <Transpiler
      id={id}
      {...transpiler}
      onAddClick={onAddTranspilerClick}
      onRemoveClick={onRemoveTranspilerClick}
    />
  );
}

TranspilerContainer.propTypes = {
  id: PropTypes.string.isRequired
};
