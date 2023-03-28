import axios from 'axios';

export const url =
  'https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62';

const api = axios.create({ baseURL: url });

export async function getEvents() {
  const data = await api.get();
  return data.data;
}
