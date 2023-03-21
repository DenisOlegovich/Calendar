import { React} from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import EventPageItem from './EventPageItem';
import { useParams } from 'react-router-dom';
import { useRecoilValue} from 'recoil';
import { todoItemsState } from '../../state/atoms';

function EventPage({ data }) {
  const { id } = useParams();
  const todoItems = useRecoilValue(todoItemsState);
  return (
    <Box paddingBottom="20px" fontSize="20px">
      <SimpleGrid spacingX="40px" spacingY="20px">
        <EventPageItem
          id={data?.[id]?.id}
          key={data?.[id]?.id}
          title={data?.[id]?.title}
          date={data?.[id]?.date}
          description={data?.[id]?.description}
          image={data?.[id]?.image}
          visitorsCount={todoItems?.[id]?.visitorsCount}
          visitors={todoItems?.[id]?.visitors}
        />
      </SimpleGrid>
    </Box>
  );
}

export default EventPage;
