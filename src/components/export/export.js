import React from 'react';
import { Flex, Button } from '@chakra-ui/core';
import Bootstrapper from '../../services/bootstrapper';
import { useSelector } from 'react-redux';

export default function Export() {
  const state = useSelector((state) => state);
  const bootstrapper = new Bootstrapper(state);

  return (
    <Flex justifyContent="center">
      <Button
        onClick={() => {
          bootstrapper.bootstrap();
          bootstrapper.exportAsZip();
        }}
        variant="outline"
        variantColor="green"
      >
        Download Zip
      </Button>
    </Flex>
  );
}
