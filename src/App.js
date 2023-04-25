import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import Header from './components/Header';
import Calendar from './components/Calendar/Calendar';
import Events from './components/Events/Events';
import EventPage from './components/EventPage/EventPage';
import RedirectPage from './components/RedirectPage';
import defaultTheme from '@chakra-ui/theme';
import { RecoilRoot } from 'recoil';

export const theme = extendBaseTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
    size: '14px',
  },
  components: {
    Modal: defaultTheme.components.Modal,
    Select: defaultTheme.components.Select,
  },
});
function App() {
  return (
    <RecoilRoot>
      <ChakraBaseProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventPage />} />
          <Route path="*" element={<RedirectPage />} />
        </Routes>
      </ChakraBaseProvider>
    </RecoilRoot>
  );
}
export default App;
