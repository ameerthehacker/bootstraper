import React from 'react';
import { LIBRARIES } from './data';
import Library from './components';
import { Stack } from '@chakra-ui/core';

export default function Libraries(props) {
  return (
    <Stack {...props} flexWrap="wrap" spacing={4} shouldWrapChildren isInline>
      {Object.keys(LIBRARIES).map((library) => (
        <Library key={library} {...LIBRARIES[library]} />
      ))}
    </Stack>
  );
}
