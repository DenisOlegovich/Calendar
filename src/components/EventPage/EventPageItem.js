import { React, useState } from 'react';
import {
  Box,
  Flex,
  Spacer,
  Container,
  Button,
  Image,
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
  useMediaQuery,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { todoItemsState } from '../../state/atoms';

function EventPageItem({ id, title, date, image, description }) {
  let date1 = new Date(date);
  const capitalize = str => str?.charAt(0).toUpperCase() + str?.slice(1);
  const todoItems = useRecoilValue(todoItemsState);
  const todoItemsId = todoItems.find(item => item.id === id);

  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const [visitorCount, setVisitorCount] = useState(
    todoItemsId ? todoItemsId.newVisitorCount : 0
  );

  const [visitors, setVisitors] = useState([]);
  const [visitorsFirstName, setVisitorsFirstName] = useState(
    todoItemsId ? todoItemsId.newVisitorFirstName : ''
  );
  const [visitorsLastName, setVisitorsLastName] = useState(
    todoItemsId ? todoItemsId.newVisitorLastName : ''
  );

  const [subscribed, setSubscribed] = useState(todoItemsId ? true : false);
  const setTodoList = useSetRecoilState(todoItemsState);
  const [isSmallerThan900] = useMediaQuery('(max-width: 900px)');

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
    setSubscribed(true);
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
  }

  const handleUnsubscribe = () => {
    setVisitorCount(0);
    setVisitors([]);
    setVisitorsFirstName('');
    setVisitorsLastName('');
    closeModal2();
    setSubscribed(false);
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
    <Container MinW="70%" margin="10px">
      <Flex
        direction={isSmallerThan900 ? 'column' : 'row'}
        alignItems="space-between"
      >
        <Image
          w="auto"
          h="auto"
          paddingRight={isSmallerThan900 ? '0' : '30px'}
          src={image}
          alt="Фотки нет"
          paddingLeft="auto"
        />
        <Box>
          <Box paddingTop="25px">
            <Flex>
              <Heading as="h5" paddingTop="2px" fontWeight="700">
                {capitalize(title)}
              </Heading>
              <Spacer />
              <Flex alignItems="center">
                <Text
                  as="p"
                  border="1px solid #D3ADF7"
                  color="#722ED1"
                  backgroundColor="#F9F0FF"
                  padding="1px 8px"
                >
                  {date1.getDate() +
                    '.' +
                    (date1.getMonth() + 1) +
                    '.' +
                    date1.getFullYear()}
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Text
            marginTop="30px"
            maxH="300px"
            marginBottom={isSmallerThan900 ? '15px' : '150px'}
            as="p"
          >
            {description}
          </Text>
          <Spacer />
          <Box>
            <Flex justifyContent="flex-end" alignItems="flex-end">
              <Button
                backgroundColor="#1890FF"
                border="none"
                color="#FFFFFF"
                variant="link"
                size="lg"
                // position="absolute"
                bottom="0px"
                right="0"
                borderRadius="50px"
                padding="5px"
                onClick={openModal1}
                id="subscribe-button"
                display={subscribed ? 'none' : 'block'}
              >
                {'>'} Записаться
              </Button>

              <Button
                backgroundColor="Red"
                border="none"
                variant="link"
                size="lg"
                // position="absolute"
                bottom="0px"
                right="0"
                borderRadius="50px"
                padding="5px"
                // display="none"
                onClick={openModal2}
                id="unsubscribe-button"
                display={subscribed ? 'block' : 'none'}
              >
                {'>'} Отписаться
              </Button>
            </Flex>
          </Box>
        </Box>
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
              <Button
                border="1px solid"
                borderRadius="50px"
                color="rgba(66, 66, 66, 0.45)"
                fontWeight="700"
                padding="7px 20px"
                marginRight="10px"
                onClick={closeModal1}
              >
                Отмена
              </Button>
              <Button
                borderRadius="25px"
                padding="7px 20px"
                color="white"
                fontWeight="700"
                bg="#1890FF"
                onClick={handleOkClick}
              >
                Ок
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal isOpen={modalIsOpen2} onClose={closeModal2}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 0C4.92545 0 0 4.92545 0 11C0 17.0746 4.92545 22 11 22C17.0746 22 22 17.0746 22 11C22 4.92545 17.0746 0 11 0ZM11 20.1339C5.9567 20.1339 1.86607 16.0433 1.86607 11C1.86607 5.9567 5.9567 1.86607 11 1.86607C16.0433 1.86607 20.1339 5.9567 20.1339 11C20.1339 16.0433 16.0433 20.1339 11 20.1339Z"
                  fill="#FAAD14"
                />
              </svg>
              Вы уверены, что хотите отписаться?
            </ModalHeader>
            <Spacer />
            <ModalFooter>
              <Button
                border="1px solid"
                borderRadius="50px"
                color="rgba(66, 66, 66, 0.45)"
                fontWeight="700"
                padding="7px 20px"
                marginRight="10px"
                onClick={closeModal2}
              >
                Отмена
              </Button>
              <Button
                borderRadius="25px"
                padding="7px 20px"
                color="white"
                fontWeight="700"
                bg="#1890FF"
                onClick={handleUnsubscribe}
              >
                Ок
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>

      <Spacer />
      <Box paddingTop="50px" fontWeight="700">
        Посетители {visitorCount}
      </Box>
      <Spacer />
      <Box>
        {visitorsFirstName.length === 0 ? (
          <Text as="span">Пока никто не записан</Text>
        ) : (
          <>
            <UnorderedList listStyleType="none" marginLeft="0" paddingLeft="0">
              <ListItem>
                {visitorsFirstName} {visitorsLastName}
              </ListItem>
            </UnorderedList>
          </>
        )}
      </Box>
    </Container>
  );
}

export default EventPageItem;
