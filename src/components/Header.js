import React from 'react';
//import { CiGrid41 } from 'react-icons/ci';
import {
  Container,
  Flex,
  Spacer,
  useMediaQuery,
  Box,
  Link,
} from '@chakra-ui/react';
//import { BsCalendar3Range } from 'react-icons/bs';
import { CalendarIcon, HamburgerIcon } from '@chakra-ui/icons';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import {AppstoreOutlined} from "@ant-design/icons";
//import {CalendarOutlined} from "@ant-design/icons";
import theme from '../App';

function Header() {
  const [isSmallerThan600] = useMediaQuery('(max-width: 800px)');

  return (
    <Container
      p="20px"
      gap="30px"
      fontFamily="heading"
      // fontSize={theme.fonts.size}
      //
    >
      <Flex
        p="20px"
        gap="30px"
        align-items="center"
        justifyContent={isSmallerThan600 ? 'center' : 'flex-end'}
      >
        {/* <Spacer /> */}
        <Box>
          <Link
            display="inline-flex"
            alignItems="center"
            textDecoration="none"
            border="none"
            color="#1890ff"
            fontSize="15px"
            gap="5px"
            _hover={{ borderBottom: '1.5px solid #1890ff' }}
            _visited={{ borderBottom: '1.5px solid #1890ff' }}
            _focus={{ borderBottom: '1.5px solid #1890ff' }}
            href="/events"
          >
            <HamburgerIcon />
            {/* <Icon as={StyledHamburgerIcon} /> */}
            События
          </Link>
        </Box>
        <Box>
          <Link
            display="inline-flex"
            alignItems="center"
            textDecoration="none"
            border="none"
            color="#1890ff"
            fontSize="15px"
            gap="5px"
            _hover={{ borderBottom: '1.5px solid #1890ff' }}
            _visited={{ borderBottom: '1.5px solid #1890ff' }}
            _focus={{ borderBottom: '1.5px solid #1890ff' }}
            href="/calendar"
          >
            <CalendarIcon />
            Календарь
          </Link>
        </Box>
      </Flex>
    </Container>
  );
}
export default Header;
//<Icon as={CiGrid41} />
