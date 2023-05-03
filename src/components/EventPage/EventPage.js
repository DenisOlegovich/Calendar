import { React } from 'react';
import { Box, SimpleGrid, Spacer } from '@chakra-ui/react';
import EventPageItem from './EventPageItem';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { todoItemsState } from '../../state/atoms';
import { useGetEvents } from '../../Api/hooks/useGetEvents';
function EventPage() {
  const { id } = useParams();
  const { data: event } = useGetEvents({
    select: data => {
      const event = data.find(el => `${el.id}` === id);
      if (event) {
        return {
          ...event,
          date: new Date(event.date),
        };
      }
    },
    enabled: !!id,
  });
  const [isSmallerThan1285] = useMediaQuery('(max-width: 1285px)');
  const todoItems = useRecoilValue(todoItemsState);
  return (
    <Box paddingBottom="20px" fontSize="14px">
      <Flex justifyContent={isSmallerThan1285 ? 'center' : 'space-between'}>
        {event && (
          <EventPageItem
            id={event.id}
            key={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
            image={event.image}
            visitorsCount={todoItems?.[id]?.visitorsCount}
            visitors={todoItems?.[id]?.visitors}
          />
        )}
      </Flex>
    </Box>
  );
}

export default EventPage;
