import React from 'react';
import DATA from '../../data';
import Library from './components';
import { Stack } from '@chakra-ui/core';

export default function Libraries(props) {
  return (
    <Stack {...props} flexWrap="wrap" spacing={4} shouldWrapChildren isInline>
      {Object.keys(DATA.libraries).map((library) => (
        <Library key={library} {...DATA.libraries[library]} />
      ))}
    </Stack>
  );
}
