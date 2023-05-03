import React from 'react';
import { Container, Flex, useMediaQuery, Box } from '@chakra-ui/react';
import { NavLink, Link } from 'react-router-dom';
import EventIcon from './Icons/EventIcon';
import CalendarIcon from './Icons/CalendarIcon';

function Header() {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

  return (
    <Container
      p="20px"
      gap="30px"
      fontFamily="heading"
    >
      <Flex
        p="20px"
        gap="30px"
        align-items="center"
        justifyContent={isSmallerThan800 ? 'center' : 'flex-end'}
      >
        <Box>
          <NavLink
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              border: 'none',
              color: '#1890ff',
              fontSize: '15px',
              gap: '5px',
            }
          }
            onMouseOver={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
            onMouseOut={e => e.target.style.borderBottom= 'none'}
            onClick={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
            onFocus={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
            activeStyle={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
            to="/events"
          >
            <EventIcon />

            События
          </NavLink>
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
            }}
            onMouseOver={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
            onMouseOut={e => e.target.style.borderBottom= 'none'}
            onClick={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
            onFocus={e => e.target.style.borderBottom= '1.5px solid #1890ff'}
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


<Link to="/" style={{ color: 'blue', textDecoration: 'none' }} 
  activeStyle={{ color: 'red', textDecoration: 'underline' }}
  style={window.location.pathname === '/' ? { color: 'red', textDecoration: 'underline' } : {}}
>
  Главная
</Link>
