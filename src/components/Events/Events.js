import { React, useState} from 'react';
import { Box, Button, Container, Flex, Spacer } from '@chakra-ui/react';
//import EventList from './EventList';

import { SimpleGrid } from '@chakra-ui/react';
import Event from './Event';

function Events({ data }) {
  const [selectedDate, setSelectedDate] = useState({ year: null, month: null });
  const [displayCount, setDisplayCount] = useState(3);
  let date1 = new Date(data.date);

  const filteredData = data
  .filter(event => {
    if (selectedDate.year && selectedDate.month) {
      return (
        event.date ===
        `${selectedDate.year}-${selectedDate.month}-${event.date.slice(-16)}`
      );
    } else {
      return true;
    }
  })
  .slice(0, displayCount);
  return (
    <Flex justifyContent="space-between">
      <Container minW="70%" maxW="100%" marginLeft="auto" marginRight="auto">
        <Flex alignItems="flex-end">
          <Spacer />
          <Box>
          <label htmlFor="year-select"></label>
              <select
                name="year"
                id="year-select"
                value={selectedDate.year}
                onChange={e => setSelectedDate({ ...selectedDate, year: e.target.value })}
>
                <option value="">Выбрать год</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>

              <label htmlFor="month-select"></label>
              <select
                name="month"
                id="month-select"
                value={selectedDate.month}
                onChange={e => setSelectedDate({ ...selectedDate, month: e.target.value })}
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
            </select>
          </Box>
        </Flex>

        <Box h="auto" paddingBottom="20px" fontSize="20px">
          <SimpleGrid
            minChildWidth="450px"
            spacingX="40px"
            spacingY="20px"
            // bg="green"
          >
            {filteredData.map(data => (
              <Event
                key={data.id}
                id={data.id}
                title={data.title}
                date={data.date}
                description={data.description}
                image={data.image}
              />
            ))}
          </SimpleGrid>
        </Box>

        <Flex justifyContent="center" alignItems="center">
          <Button
            backgroundColor="#1890FF"
            borderRadius="25px"
            color="white"
            size="md"
            padding="5px"
            onClick={() => setDisplayCount(displayCount + 3)}
          >
            Загрузить больше
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
}

//   return (
//     <Flex>
//       <Container minW="70%" maxW="100%" marginLeft="auto" marginRight="auto">
//         <Flex alignItems="flex-end">
//           <Spacer />
//           <Box>
//             <label for="year-select"></label>
//             <select name="year" id="year-select">
//               <option value="2022">2022</option>
//               <option value="2023">2023</option>
//             </select>

//             <label for="month-select"></label>
//             <select name="month" id="month-select">
//               <option value="Январь">Январь</option>
//               <option value="Февраль">Февраль</option>
//               <option value="Март">Март</option>
//               <option value="Апрель">Апрель</option>
//               <option value="Май">Май</option>
//               <option value="Июнь">Июнь</option>
//               <option value="Июль">Июль</option>
//               <option value="Август">Август</option>
//               <option value="Сентябрь">Сентябрь</option>
//               <option value="Октябрь">Октябрь</option>
//               <option value="Ноябрь">Ноябрь</option>
//               <option value="Декабрь">Декабрь</option>
//             </select>
//           </Box>
//         </Flex>

//         <EventList data={data} />

//         <Flex justifyContent="center" alignItems="center">
//           <Button backgroundColor="#1890FF" borderRadius="25px" color="white">
//             Загрузить больше
//           </Button>
//         </Flex>
//       </Container>
//     </Flex>
//   );
//}
export default Events;
