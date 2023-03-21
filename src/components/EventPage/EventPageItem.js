import { React, useState } from 'react';
import {
  Box,
  Flex,
  Spacer,
  Container,
  Button,
  Img,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
  Heading,
} from '@chakra-ui/react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { todoItemsState } from '../../state/atoms';

function EventPageItem({ id, title, date, image, description }) {
  let date1 = new Date(date);
  //const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  const todoItems = useRecoilValue(todoItemsState);
  const todoItemsId = todoItems.find(item => item.id === id);

  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [name, setName] = useState({ firstName: '', lastName: '' });
  // const visitorCountAtom = todoItemsId ? todoItemsId.newVisitorCount : 0;
  // console.log(todoItemsId.visitorCount);
  const [visitorCount, setVisitorCount] = useState(
    todoItemsId ? todoItemsId.newVisitorCount : 0
  );
  // todoItemsId ? todoItemsId.newVisitor : [];

  const [visitors, setVisitors] = useState([]);
  const [visitorsFirstName, setVisitorsFirstName] = useState(
    todoItemsId ? todoItemsId.newVisitorFirstName : ''
  );
  console.log(visitorsFirstName);
  const [visitorsLastName, setVisitorsLastName] = useState(
    todoItemsId ? todoItemsId.newVisitorLastName : ''
  );

  const [subscribed, setSubscribed] = useState(todoItemsId ? true : false);
  const subscribeButton = document.getElementById('subscribe-button');
  const unsubscribeButton = document.getElementById('unsubscribe-button');
  const setTodoList = useSetRecoilState(todoItemsState);

  // function updateVisitors() {
  //   if (todoItemsId) {
  //     setVisitorsFirstName(todoItemsId.firstName);
  //     setVisitorsLastName(todoItemsId.lastName);
  //   }
  // }
  // // console.log(todoItemsId.newVisitor.firstName);
  // updateVisitors();
  function handleOkClick() {
    const newVisitor = {
      firstName: name.firstName,
      lastName: name.lastName,
    };
    const newVisitorFirstName = name.firstName;

    const newVisitorLastName = name.lastName;
    const newVisitorCount = visitorCount + 1;
    setVisitorCount(newVisitorCount);
    setVisitors([...visitors, newVisitor]);
    setVisitorsFirstName([...visitorsFirstName, newVisitorFirstName]);
    setVisitorsLastName([...visitorsLastName, newVisitorLastName]);

    setName({ firstName: '', lastName: '' });
    setTodoList(oldTodolist => {
      return [
        ...oldTodolist,
        {
          id,
          title,
          date,
          image,
          description,
          newVisitorCount,
          newVisitor,
          newVisitorFirstName,
          newVisitorLastName,
        },
      ];
    });
    closeModal1();

    subscribeButton.style.display = 'none';
    unsubscribeButton.style.display = 'block';
  }

  const handleUnsubscribe = () => {
    setVisitorCount(0);
    setVisitors([]);
    setVisitorsFirstName('');
    setVisitorsLastName('');
    closeModal2();
    subscribeButton.style.display = 'block';
    unsubscribeButton.style.display = 'none';
    console.log('1');
  };

  function openModal1() {
    setModalIsOpen1(true);
  }

  function closeModal1() {
    setModalIsOpen1(false);
  }
  function openModal2() {
    setModalIsOpen2(true);
  }

  function closeModal2() {
    setModalIsOpen2(false);
  }
  function handleFirstNameChange(event) {
    setName({ ...name, firstName: event.target.value });
  }

  function handleLastNameChange(event) {
    setName({ ...name, lastName: event.target.value });
  }

  return (
    <Container w="1200px" h="500px" margin="10px">
      <Flex>
        <Img
          w="527px"
          h="329px"
          paddingRight="30px"
          src={image}
          alt="Фотки нет"
        />
        <Box position="relative">
          <Flex>
            <Heading as="h5" fontWeight="500">
              {title}
            </Heading>
            <Spacer />
            <p>
              {date1.getDate() +
                '.' +
                (date1.getMonth() + 1) +
                '.' +
                date1.getFullYear()}
            </p>
          </Flex>
          <p>{description}</p>
          <Spacer />
          <Button
            backgroundColor="#1890FF"
            border="none"
            color="#FFFFFF"
            variant="link"
            size="lg"
            position="absolute"
            bottom="0"
            right="0"
            borderRadius="50px"
            onClick={openModal1}
            id="subscribe-button"
            display={subscribed ? 'none' : 'block'} // add an id attribute
          >
            {'>'} Записаться
          </Button>

          <Button
            backgroundColor="Red"
            border="none"
            variant="link"
            size="lg"
            position="absolute"
            bottom="0px"
            right="0"
            borderRadius="50px"
            // display="none"
            onClick={openModal2}
            id="unsubscribe-button" // add an id attribute
            display={subscribed ? 'block' : 'none'}
          >
            {'>'} Отписаться
          </Button>

          <Modal isOpen={modalIsOpen1} onClose={closeModal1}>
            <ModalOverlay />
            <ModalContent width="572px" height="310px">
              <ModalHeader>{title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl>
                  <Input
                    placeholder="Имя"
                    type="text"
                    value={name.firstName}
                    onChange={handleFirstNameChange}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    placeholder="Фамилия"
                    type="text"
                    value={name.lastName}
                    onChange={handleLastNameChange}
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button variant="ghost" mr={3} onClick={closeModal1}>
                  Отмена
                </Button>
                <Button colorScheme="blue" onClick={handleOkClick}>
                  Ок
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Modal isOpen={modalIsOpen2} onClose={closeModal2}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Вы уверены, что хотите отписаться?</ModalHeader>
              <ModalBody>
                Нажимая "Подтвердить", вы отпишетесь от нашей рассылки.
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={closeModal2}>
                  Отмена
                </Button>
                <Button onClick={handleUnsubscribe} variant="ghost">
                  Подтвердить
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
      <Spacer />
      <Box>Посетители {visitorCount}</Box>
      <Spacer />
      <Box>
        {visitorsFirstName.length === 0 ? (
          <span>Пока никто не записан</span>
        ) : (
          <>
            {/* <ul>
              {visitors.map((visitor, index) => (
                <li key={index}>
                  {visitor.firstName} {visitor.lastName}
                </li>
              ))}
            </ul> */}
            <ul>
              <li>
                {visitorsFirstName} {visitorsLastName}
              </li>
            </ul>
          </>
        )}
      </Box>
    </Container>
  );
}

export default EventPageItem;
