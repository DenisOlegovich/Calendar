import { useQuery } from 'react-query';
import { getEvents } from '..';

export function useGetEvents(options) {
  return useQuery('events', getEvents, options);
}
