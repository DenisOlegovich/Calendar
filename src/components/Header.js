import React from 'react';
//import { CiGrid41 } from 'react-icons/ci';
import { Container, Flex, useMediaQuery, Box } from '@chakra-ui/react';
//import { BsCalendar3Range } from 'react-icons/bs';
// import { CalendarIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import EventIcon from './Icons/EventIcon';
import CalendarIcon from './Icons/CalendarIcon';

//import {AppstoreOutlined} from "@ant-design/icons";
//import {CalendarOutlined} from "@ant-design/icons";

function Header() {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

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
        justifyContent={isSmallerThan800 ? 'center' : 'flex-end'}
      >
        {/* <Spacer /> */}
        <Box>
          <Link
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              border: 'none',
              color: '#1890ff',
              fontSize: '15px',
              gap: '5px',
              _hover: { borderBottom: '1.5px solid #1890ff' },
              _visited: { borderBottom: '1.5px solid #1890ff' },
              _focus: { borderBottom: '1.5px solid #1890ff' },
            }}
            to="/events"
          >
            <EventIcon />
            {/* <Icon as={StyledHamburgerIcon} /> */}
            События
          </Link>
        </Box>
        <Box>
          <Link
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              border: 'none',
              color: '#1890ff',
              fontSize: '15px',
              gap: '5px',
              _hover: { borderBottom: '1.5px solid #1890ff' },
              _visited: { borderBottom: '1.5px solid #1890ff' },
              _focus: { borderBottom: '1.5px solid #1890ff' },
            }}
            to="/calendar"
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
