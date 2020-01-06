import React from 'react';
import { Box, Text, Image, Link } from '@chakra-ui/core';
import PropTypes from 'prop-types';

export default function Library({ title, image, description, learnMoreLink }) {
  return (
    <Box overflow="hidden" rounded="lg" borderWidth="1px">
      <Image width={200} src={image} />
      <Box p={5}>
        <Text fontWeight="semibold" fontSize="lg">
          {title}
        </Text>
        <Text maxWidth={160}>{description}</Text>
        <Link color="teal.500" href={learnMoreLink} isExternal>
          Learn More
        </Link>
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
