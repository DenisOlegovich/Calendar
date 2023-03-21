import { React, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import Header from './components/Header';
import Calendar from './components/Calendar/Calendar';
import Events from './components/Events/Events';
import EventPage from './components/EventPage/EventPage';
import RedirectPage from './components/RedirectPage';
import defaultTheme from '@chakra-ui/theme';
import { RecoilRoot } from 'recoil';
const theme = extendBaseTheme({
  components: {
    Modal: defaultTheme.components.Modal,
  },
});

export const url =
  'https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <RecoilRoot>
      <ChakraBaseProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/calendar" element={<Calendar initialData={data} />} />
          <Route path="/events" element={<Events data={data} />} />
          <Route path="/events/:id" element={<EventPage data={data} />} />
          <Route path="*" element={<RedirectPage path="/calendar" />} />
        </Routes>
      </ChakraBaseProvider>
    </RecoilRoot>
  );
}
export default App;
