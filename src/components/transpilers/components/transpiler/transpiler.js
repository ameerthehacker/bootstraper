import React, { useState } from 'react';
import { Box, Text, Image, Link, IconButton, Stack } from '@chakra-ui/core';
import PropTypes from 'prop-types';

export default function Transpiler({
  id,
  title,
  image,
  description,
  learnMoreLink,
  isRequired = false,
  onAddClick,
  onRemoveClick
}) {
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
          {isRequired ? (
            <IconButton
              onClick={() => onRemoveClick(id)}
              variantColor="red"
              icon="delete"
            />
          ) : (
            <IconButton
              onClick={() => onAddClick(id)}
              variantColor="green"
              icon="add"
            />
          )}
          <IconButton variantColor="orange" icon="settings" />
        </Stack>
      </Box>
    </Box>
  );
}

Transpiler.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  learnMoreLink: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  onAddClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};
