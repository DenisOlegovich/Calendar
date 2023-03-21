import React from 'react';
//import { CiGrid41 } from 'react-icons/ci';
import { Container, Flex, Spacer } from '@chakra-ui/react';
//import { BsCalendar3Range } from 'react-icons/bs';
import { CalendarIcon, HamburgerIcon} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import {AppstoreOutlined} from "@ant-design/icons";
//import {CalendarOutlined} from "@ant-design/icons";

function Header() {
  const StyledLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    border: none;
    color: #1890ff;
    font-size: 15px;
    gap: 5px;
    &:hover,
    &:visited,
    &:focus {
      text-decoration: underline;
      text-decoration-position: under;
      text-underline-offset: 10px;
    }
  `;
  const StyledHamburgerIcon = styled(HamburgerIcon)`
    &:hover,
    &:visited,
    &:focus {
      text-decoration: underline;
      text-decoration-position: under;
      text-underline-offset: 10px;
    }
  `;
  return (
    <Container
      p="20px"
      // fontSize="20px"
      gap="30px"
    >
      <Flex p="20px" gap="30px" justify-content="flex-end" align-items="center">
        <Spacer />
        <StyledLink to="/events">
          <StyledHamburgerIcon />
          {/* <Icon as={StyledHamburgerIcon} /> */}
          События
        </StyledLink>
        <StyledLink to="/calendar">
          <CalendarIcon />
          Календарь
        </StyledLink>
      </Flex>
    </Container>
  );
}
export default Header;
//<Icon as={CiGrid41} />
