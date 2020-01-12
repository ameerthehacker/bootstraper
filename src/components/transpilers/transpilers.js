import React from 'react';
import { Stack } from '@chakra-ui/core';
import { useSelector } from 'react-redux';
import TranspilerContainer from './containers/transpiler';

export default function Transpilers(props) {
  const transpilers = useSelector((state) => {
    return state.transpilers ? Object.keys(state.transpilers) : [];
  });

  return (
    <Stack {...props} flexWrap="wrap" spacing={4} shouldWrapChildren isInline>
      {transpilers.map((transpiler) => (
        <TranspilerContainer key={transpiler} id={transpiler} />
      ))}
    </Stack>
  );
}
