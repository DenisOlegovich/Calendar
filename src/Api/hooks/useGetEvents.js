import { useQuery } from 'react-query';
import { getEvents } from '..';

export function useGetEvents(options) {
  const data = useQuery('events', getEvents, options);
  return data;
}
