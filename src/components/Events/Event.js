import React from 'react';
import { Box, Flex, Container, Img, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Event({ title, date, image, id }) {
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Container
      backgroundColor="#FFFFFF"
      border="1px solid #E7E7E7"
      // w="408px"
      // h="379px"
      margin="10px"
      paddingBottom="25px"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        paddingLeft="15px"
        paddingRight="15px"
        padding="10px"
      >
        <Heading as="h5" fontWeight="700">
          {capitalize(title)}
        </Heading>
        <Link style={{ color: '#1890ff' }} to={`/events/${id}`}>
          Больше
        </Link>
      </Flex>
      <Img maxW="400px" maxH="255px" src={image} alt="Фотки нет"></Img>
      <Box paddingTop="15px" paddingLeft="25px" fontWeight="700">
        <Text as="p">
          {date.getDate() +
            '.' +
            (date.getMonth() + 1) +
            '.' +
            date.getFullYear()}
        </Text>
      </Box>
    </Container>
  );
}

export default Event;
