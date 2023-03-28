import {
  Flex,
  Image,
  Box,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useMediaQuery,
  Link,
} from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';

function CalendarTask({ title, date, description, image, id, deleteEvent }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  // const StyledLink = styled(Link)`
  //   text-decoration: none;
  //   border: none;
  //   color: #1890ff;
  //   font-size: 14px;
  // `;
  function DeleteModal() {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Удаление события</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Вы уверены, что отказаться?</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              border="1px solid"
              color="rgba(66, 66, 66, 0.45)"
              fontWeight="700"
              borderRadius="50px"
              padding="7px 20px"
              onClick={onClose}
              marginRight="10px"
            >
              Отмена
            </Button>
            <Button
              borderRadius="25px"
              padding="7px 20px"
              color="white"
              fontWeight="700"
              bg="#1890FF"
              onClick={() => deleteEvent(id)}
            >
              Ок
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Flex
      maxW="1500px"
      minW="80%"
      justifyContent="space-between"
      borderBottom="1px solid"
      paddingTop="15px"
      paddingBottom="5px"
    >
      <Flex alignItems="center">
        <Image height="70px" width="70px" src={image} alt="Фотки нет" />
      </Flex>
      <Box w="50%">
        <Heading fontSize="14px" fontWeight="700">
          {capitalize(title)}
        </Heading>
        <Text fontSize="14px" isTruncated color="rgba(66, 66, 66, 0.45)">
          {description.split(' ').slice(0, 5).join(' ')}
          {description.split(' ').length > 5 ? '...' : ''}
        </Text>
      </Box>
      {isSmallerThan600 ? (
        <Flex alignItems="center" justifyContent="center">
          <AiFillDelete bg="white" border="none" onClick={onOpen} />
        </Flex>
      ) : (
        <Flex justifyContent="space-between" alignItems="center">
          <Button
            bg="none"
            color="#1890FF"
            border="none"
            onClick={onOpen}
            fontSize="15px"
            paddingRight="10px"
          >
            Удалить событие
          </Button>
          <Link color="#1890ff" href={`/events/${id}`}>
            Перейти на страницу
          </Link>

          <DeleteModal />
        </Flex>
      )}
    </Flex>
  );
}

export default CalendarTask;
