import { React, useState, useMemo } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  Box,
  Button,
  Container,
  Flex,
  Spacer,
  VStack,
  Select,
} from '@chakra-ui/react';

import CalendarTask from './CalendarTask';
import { todoItemsState } from '../../state/atoms';
//

function Calendar() {
  const todoItems = useRecoilValue(todoItemsState);
  // const [data, setData] = useState(todoItems);
  const [selectedDate, setSelectedDate] = useState({ year: null, month: null });
  const [displayCount, setDisplayCount] = useState(3);
  const [_todoItemsState, setTodoItemsState] = useRecoilState(todoItemsState);

  function deleteEvent(id) {
    const newList = _todoItemsState.filter(_item => _item.id !== id);
    setTodoItemsState(newList);
  }
  const filteredData = useMemo(() => {
    if (!todoItems) {
      return [];
    }

    return todoItems.filter(event => {
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
  }, [todoItems, selectedDate]);
  console.log(todoItems);
  return (
    <VStack>
      <Container minW="70%" marginLeft="auto" marginRight="auto">
        <Flex alignItems="flex-end">
          <Spacer />
          <Flex alignItems="flex-end">
            <Spacer />
            <Flex>
              <label htmlFor="year-select"></label>
              <Select
                id="year-select"
                value={selectedDate?.year}
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
                value={selectedDate?.month}
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
        </Flex>

        <VStack>
          <Box paddingBottom="20px" fontSize="20px" gap="30px" w="100%">
            {filteredData.map(todoItems => (
              <CalendarTask
                key={todoItems?.id}
                id={todoItems?.id}
                title={todoItems?.title}
                date={todoItems?.dateƒ}
                description={todoItems?.description}
                image={todoItems?.image}
                deleteEvent={deleteEvent}
              />
            ))}
            <Spacer />
          </Box>
        </VStack>
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
    </VStack>
  );
}

export default Calendar;
