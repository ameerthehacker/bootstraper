import React from 'react';
import {
  Box,
  useColorMode,
  Flex,
  Link,
  Icon,
  Stack,
  Button
} from '@chakra-ui/core';
import Logo from './components/logo';
import GitHubLogo from './components/github-logo';
import useFormat from '../../components/format';

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { bgColor, color } = useFormat();

  return (
    <Box
      color={color}
      bg={bgColor}
      px={4}
      py={3}
      borderBottomWidth="1px"
      position="fixed"
      top={0}
      w="100%"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Logo />
        <Stack spacing={2} direction="row">
          <Link href="https://github.com/ameerthehacker/bootstraper" isExternal>
            <GitHubLogo height="1.5em" opacity="0.65" fill={color} />
          </Link>
          <Button variant="link" onClick={toggleColorMode}>
            <Icon
              height="1.5em"
              width="1.5em"
              name={colorMode === 'light' ? 'moon' : 'sun'}
            />
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
