import React from 'react';
import { Stack } from '@chakra-ui/core';
import { useSelector } from 'react-redux';
import LibraryContainer from './containers/library';

export default function Libraries(props) {
  const libraries = useSelector((state) => {
    return state.libraries ? Object.keys(state.libraries) : [];
  });

  return (
    <Stack {...props} flexWrap="wrap" spacing={4} shouldWrapChildren isInline>
      {libraries.map((library) => (
        <LibraryContainer key={library} id={library} />
      ))}
    </Stack>
  );
}
