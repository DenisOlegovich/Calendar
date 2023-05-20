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

  const setTodoList = useSetRecoilState(todoItemsState);
  let dsFiveWords = description.split(' ').slice(0, 5);
  dsFiveWords = dsFiveWords.join(' ') + '...';

  function handleOkClick() {
    const newVisitor = {
      firstName: name.firstName,
      lastName: name.lastName,
      subscribed: true,
    };

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
          visitor: newVisitor,
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

  const onSubmit = data => {
    console.log(JSON.stringify(data));
  };
  //react-hook-form

  const handleUnsubscribe = () => {
    setTodoList(prev => prev.filter(item => item.id !== id));
    closeModal2();
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

  return (
    <Container margin="10px" maxW={{ base: '50%', xl: '100%' }} h="70%">
      <Flex
        direction={{ base: 'column', xl: 'row' }}
        alignItems="space-between"
      >
        <Image
          backgroundSize="cover"
          paddingRight={{ base: 0, xl: 30 }}
          maxW="527px"
          maxH="329px"
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
            marginBottom={{ base: 15, xl: 150 }}
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
                fontWeight="700"
                // position="absolute"
                bottom="0px"
                right="0"
                borderRadius="50px"
                padding="10px"
                onClick={openModal1}
                id="subscribe-button"
                display={todoItemsId?.visitor.subscribed ? 'none' : 'block'}
              >
                {'>'} Записаться
              </Button>

              <Button
                backgroundColor="Red"
                border="none"
                color="#FFFFFF"
                variant="link"
                size="lg"
                fontWeight="700"
                // position="absolute"
                bottom="0px"
                right="0"
                borderRadius="50px"
                padding="10px"
                // display="none"
                onClick={openModal2}
                id="unsubscribe-button"
                display={todoItemsId?.visitor.subscribed ? 'block' : 'none'}
              >
                Отписаться
              </Button>
            </Flex>
          </Box>
        </Box>
        <Modal size="xl" isOpen={modalIsOpen1} onClose={closeModal1}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalOverlay />
            <ModalContent width="572px" height="310px">
              <ModalHeader fontSize="16px" borderBottom="1px solid #E7E7E7">
                Записаться на событие
              </ModalHeader>
              <ModalCloseButton />

              <ModalBody marginTop="15px">
                <Flex>
                  <Box>
                    <Image
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      h="38px"
                      w="38px"
                      alt="Фотки нет"
                      marginTop="1px"
                      marginRight="15px"
                    ></Image>
                  </Box>
                  <Box>
                    <Text fontWeight="700" fontSize="14px">
                      {title}
                    </Text>
                    <Text color="rgba(66, 66, 66, 0.45)" fontSize="14px">
                      {dsFiveWords}
                    </Text>
                  </Box>
                </Flex>

                <FormControl marginTop="30px">
                  <Input
                    fontSize="14px"
                    border="1px solid #E7E7E7"
                    variant="outline"
                    width="100%"
                    size="xl"
                    marginBottom="7px"
                    padding="5px 12px"
                    {...register('firstName', { required: true })}
                    placeholder="Имя"
                    type="text"
                    value={name.firstName}
                    onChange={handleFirstNameChange}
                  />
                </FormControl>

                <FormControl>
                  <Input
                    fontSize="14px"
                    border="1px solid #E7E7E7"
                    variant="outline"
                    width="100%"
                    size="md"
                    padding="5px 12px"
                    placeholder="Фамилия"
                    type="text"
                    value={name.lastName}
                    onChange={handleLastNameChange}
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter borderTop="1px solid #E7E7E7">
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
                  type="submit"
                  onClick={handleOkClick}
                >
                  Ок
                </Button>
              </ModalFooter>
            </ModalContent>
          </form>
        </Modal>
        <Modal isOpen={modalIsOpen2} onClose={closeModal2}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Flex alignItems="center" fontWeight="700" fontSize="14px">
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
