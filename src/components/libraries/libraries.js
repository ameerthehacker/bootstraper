import React from 'react';
import Library from './components';
import { Stack } from '@chakra-ui/core';
import { useSelector } from 'react-redux';

export default function Libraries(props) {
  const libraries = useSelector((state) => {
    return state.libraries || [];
  });

  return (
    <Stack {...props} flexWrap="wrap" spacing={4} shouldWrapChildren isInline>
      {Object.keys(libraries).map((library) => (
        <Library key={library} {...libraries[library]} />
      ))}
    </Stack>
  );
}
