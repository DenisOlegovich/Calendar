import React from 'react';
import {
  Box,
  Flex,
  Container,
  Img,
  Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Event({ title, date, image, id }) {
  let date1 = new Date(date);
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  const StyledLink = styled(Link)`
    text-decoration: none;
    border: none;
    color: #1890ff;
    font-size: 20px;
  `;
  return (
    <Container
      backgroundColor="#FFFFFF"
      border="1px solid #E7E7E7"
      w="408px"
      h="379px"
      margin="10px"
      paddingBottom="25px"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        paddingLeft="15px"
        paddingRight="15px"
      >
        <Heading as="h5" fontWeight="500">{capitalize(title)}</Heading>
        <StyledLink to={`/events/${id}`}>Больше</StyledLink>
      </Flex>
      <Img w="400px" h="255px" src={image} alt="Фотки нет"></Img>
      <Box paddingTop="15px" paddingLeft="25px">
        <p>
          {date1.getDate() +
            '.' +
            (date1.getMonth() + 1) +
            '.' +
            date1.getFullYear()}
        </p>
      </Box>
    </Container>
  );
}

export default Event;
