import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Spacer, VStack } from '@chakra-ui/react';
import CalendarTask from '../components/Calendar/CalendarTask';
//import styles from './TaskList.module.css';

function CalendarTaskList({ data }) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62')
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <VStack>
      <Box
        paddingBottom="20px"
        fontSize="20px"
        gap="30px"
        minW="70%"
        maxW="100%"
      >
        {data.map(data => (
          <CalendarTask
            key={data.id}
            id={data.id}
            title={data.title}
            date={data.date}
            description={data.description}
            image={data.image}
          />
        ))}
        <Spacer />
      </Box>
    </VStack>
  );
}

export default CalendarTaskList;
