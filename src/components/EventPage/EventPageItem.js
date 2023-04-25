import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
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
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { todoItemsState } from '../../state/atoms';
import ExclamationCircle from '../Icons/ExclamationCircle';

function EventPageItem({ id, title, date, image, description }) {
  const todoItems = useRecoilValue(todoItemsState);
  const todoItemsId = todoItems.find(item => item.id === id); //useMemo
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [name, setName] = useState({ firstName: '', lastName: '' });
  // const [visitorCount, setVisitorCount] = useState(
  //   todoItemsId ? todoItemsId.newVisitorCount : 0
  // );

  // const [visitors, setVisitors] = useState(
  //   todoItemsId ? todoItemsId.newVisitor : []
  // );
  // const [visitorsFirstName, setVisitorsFirstName] = useState(
  //   todoItemsId ? todoItemsId.newVisitorFirstName : ''
  // );
  // const [visitorsLastName, setVisitorsLastName] = useState(
  //   todoItemsId ? todoItemsId.newVisitorLastName : ''
  // );

  // const [subscribed, setSubscribed] = useState(false);
  const setTodoList = useSetRecoilState(todoItemsState);

  function handleOkClick() {
    const newVisitor = {
      firstName: name.firstName,
      lastName: name.lastName,
      subscribed: true,
    };
    // const newVisitorFirstName = name.firstName;
    // const newVisitorLastName = name.lastName;
    // const newVisitorCount = visitorCount + 1;
    // setVisitorCount(newVisitorCount);
    // setVisitors([...visitors, newVisitor]);
    // setVisitorsFirstName([...visitorsFirstName, newVisitorFirstName]);
    // setVisitorsLastName([...visitorsLastName, newVisitorLastName]);
    // setSubscribed(true);
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
          // newVisitorCount,
          visitor: newVisitor,
          // newVisitorFirstName,
          // newVisitorLastName,
          count: 1,
        },
      ];
    });
    closeModal1();
  }

  //react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleUnsubscribe = () => {
    // setVisitorCount(0);
    // setVisitors([]);
    // setVisitorsFirstName('');
    // setVisitorsLastName('');

    setTodoList(prev => prev.filter(item => item.id !== id));
    closeModal2();
    // setSubscribed(false);
  };

  const capitalize = str => str?.charAt(0).toUpperCase() + str?.slice(1);

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

  console.log(todoItemsId);
  return (
    <Container MinW="70%" margin="10px">
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        alignItems="space-between"
      >
        <Image
          w="auto"
          h="auto"
          paddingRight={{ base: 0, lg: 30 }}
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
                  {date.getDate() +
                    '.' +
                    (date.getMonth() + 1) +
                    '.' +
                    date.getFullYear()}
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Text
            marginTop="30px"
            maxH="300px"
            marginBottom={{ base: 15, lg: 150 }}
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
                display={todoItemsId?.visitor.subscribed ? 'none' : 'block'}
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
                display={todoItemsId?.visitor.subscribed ? 'block' : 'none'}
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
              <form onSubmit={handleSubmit(handleOkClick)}>
                <FormControl>
                  <Input
                    {...register('firstName', { required: true })}
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
              </form>
            </ModalBody>
            <ModalFooter>
              <Button
                border="1px solid"
                borderRadius="50px"
                fontSize="14px"
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
                fontSize="14px"
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
              <Flex alignItems="center" fontWeight="700" fontSize="16px">
                <ExclamationCircle />
                Вы уверены, что хотите отписаться?
              </Flex>
            </ModalHeader>
            <Spacer />
            <ModalFooter>
              <Button
                border="1px solid"
                borderRadius="50px"
                fontSize="14px"
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
                fontSize="14px"
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
        Посетители {todoItemsId?.title === undefined ? 0 : todoItemsId.count}
      </Box>
      <Spacer />
      <Box>
        {todoItemsId?.title === undefined ? (
          <Text as="span">Пока никто не записан</Text>
        ) : (
          <>
            <UnorderedList listStyleType="none" marginLeft="0" paddingLeft="0">
              <ListItem>
                {todoItemsId?.visitor.firstName} {todoItemsId?.visitor.lastName}
              </ListItem>
            </UnorderedList>
          </>
        )}
      </Box>
    </Container>
  );
}

export default EventPageItem;
