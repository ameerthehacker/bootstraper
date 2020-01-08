import React, { useState } from 'react';
import { Box, Text, Image, Link, IconButton, Stack } from '@chakra-ui/core';
import PropTypes from 'prop-types';

export default function Library({ title, image, description, learnMoreLink }) {
  const [isDescTruncated, setIsDescTruncated] = useState(true);

  function toggleIsDescTruncated() {
    setIsDescTruncated((isDescTruncated) => !isDescTruncated);
  }

  return (
    <Box mt={5} overflow="hidden" rounded="lg" borderWidth="1px">
      <Image width={200} src={image} />
      <Box p={5}>
        <Text fontWeight="semibold" fontSize="lg">
          {title}
        </Text>
        <Text
          onClick={toggleIsDescTruncated}
          maxWidth={160}
          isTruncated={isDescTruncated}
        >
          {description}
        </Text>
        <Link color="teal.500" href={learnMoreLink} isExternal>
          Learn More
        </Link>
        <Stack mt={3} isInline>
          <IconButton variantColor="green" icon="add" />
          <IconButton variantColor="orange" icon="settings" />
        </Stack>
      </Box>
    </Box>
  );
}

Library.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  learnMoreLink: PropTypes.string.isRequired
};
