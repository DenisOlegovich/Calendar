import { React, useState, useMemo } from 'react';
import {
  Box,
  Container,
  Flex,
  Spacer,
  useMediaQuery,
  Select,
} from '@chakra-ui/react';
//import EventList from './EventList';

import { SimpleGrid } from '@chakra-ui/react';
import Event from './Event';
import { useGetEvents } from '../../Api/hooks/useGetEvents';

function Events() {
  const { data } = useGetEvents();
  console.log('Рендер');
  // const memoizedData = useMemo(() => data, [data]);
  const [selectedDate, setSelectedDate] = useState({ year: null, month: null });

  const [isSmallerThan1285] = useMediaQuery('(max-width: 1285px)');
  // const filteredData = useMemo(() => {
  //   if (!data) {
  //     return [];
  //   }

  //   return data.filter(event => {
  //     const year = new Date(event.date).getFullYear();
  //     const month = new Date(event.date).getMonth() + 1;
  //     if (selectedDate.year && selectedDate.month) {
  //       return (
  //         `${year}-${month}` === `${selectedDate.year}-${selectedDate.month}`
  //       );
  //     } else {
  //       return true;
  //     }
  //   });
  // }, [data, selectedDate]);
  const filteredData = data?.filter(event => {
    const year = new Date(event.date).getFullYear();
    const month = new Date(event.date).getMonth() + 1;
    if (selectedDate.year && selectedDate.month) {
      return (
        `${year}-${month}` === `${selectedDate.year}-${selectedDate.month}`
      );
    } else {
      return true;
    }
  });

  return (
    <Flex justifyContent={isSmallerThan1285 ? 'center' : 'space-between'}>
      <Container minW="70%" maxW="100%" marginLeft="auto" marginRight="auto">
        <Flex alignItems="flex-end">
          <Spacer />
          <Flex>
            <label htmlFor="year-select"></label>
            <Select
              id="year-select"
              value={selectedDate.year}
              onChange={e =>
                setSelectedDate({ ...selectedDate, year: e.target.value })
              }
            >
              <option value="">Выбрать год</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </Select>

            <Select
              id="month-select"
              value={selectedDate.month}
              onChange={e =>
                setSelectedDate({ ...selectedDate, month: e.target.value })
              }
            >
              <option value="">Выбрать месяц</option>
              <option value="01">Январь</option>
              <option value="02">Февраль</option>
              <option value="03">Март</option>
              <option value="04">Апрель</option>
              <option value="05">Май</option>
              <option value="06">Июнь</option>
              <option value="07">Июль</option>
              <option value="08">Август</option>
              <option value="09">Сентябрь</option>
              <option value="10">Октябрь</option>
              <option value="11">Ноябрь</option>
              <option value="12">Декабрь</option>
            </Select>
          </Flex>
        </Flex>

        <Box h="auto" paddingBottom="20px">
          <SimpleGrid minChildWidth="450px" placeItems="center">
            {filteredData?.map(data => (
              <Event
                key={data.id}
                id={data.id}
                title={data.title}
                date={new Date(data.date)}
                description={data.description}
                image={data.image}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Flex>
  );
}

export default Events;
