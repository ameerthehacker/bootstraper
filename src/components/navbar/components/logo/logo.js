import React from 'react';
import { Text, Image, Link, Stack } from '@chakra-ui/core';
import logo from './logo.svg';

export default function Logo() {
  return (
    <Stack direction="row" spacing={2}>
      <Image display="inline" height="2em" src={logo} />
      <Link href="/" _hover={{ textDecoration: 'none' }}>
        <Text as="b" fontSize="xl">
          Bootstraper
        </Text>
      </Link>
    </Stack>
  );
}
