import React from 'react';
import { Container, Flex, useMediaQuery, Box } from '@chakra-ui/react';
import { NavLink, Link } from 'react-router-dom';
import EventIcon from './Icons/EventIcon';
import CalendarIcon from './Icons/CalendarIcon';

function Header() {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

  return (
    <Container p="20px" gap="30px" fontFamily="heading">
      <Flex
        p="20px"
        gap="30px"
        align-items="center"
        justifyContent={isSmallerThan800 ? 'center' : 'flex-end'}
      >
        <Box>
          <NavLink
            style={({ isActive }) => ({
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              border: 'none',
              color: isActive ? '#1890ff' : '#242424',
              fontSize: '15px',
              gap: '5px',
              borderBottom: isActive ? '1.5px solid #1890ff' : 'none',
            })}
            to="/events"
          >
            <EventIcon />
            События
          </NavLink>
        </Box>
        <Box>
          <NavLink
            style={({ isActive }) => ({
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              border: 'none',
              color: isActive ? '#1890ff' : '#242424',
              fontSize: '15px',
              gap: '5px',
              borderBottom: isActive ? '1.5px solid #1890ff' : 'none',
            })}
            to="/calendar"
          >
            <CalendarIcon />
            Календарь
          </NavLink>
        </Box>
      </Flex>
    </Container>
  );
}
export default Header;
