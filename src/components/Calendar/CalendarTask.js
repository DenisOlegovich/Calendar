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
  IconButton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ExclamationCircle from '../Icons/ExclamationCircle';
import DeleteIcon from '../Icons/DeleteIcon';

function CalendarTask({ title, date, description, image, id, deleteEvent }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <Flex
      maxW="1500px"
      // minW="80%"
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
          <IconButton onClick={onOpen}>
            <DeleteIcon />
          </IconButton>
        </Flex>
      ) : (
        <Flex justifyContent="space-between" alignItems="center">
          <Button
            bg="none"
            color="#1890FF"
            border="none"
            onClick={onOpen}
            fontSize="14px"
            paddingRight="10px"
          >
            Удалить событие
          </Button>
          <Link
            style={{
              textDecoration: 'none',
              border: 'none',
              fontSize: '14px',
              color: '#1890ff',
            }}
            to={`/events/${id}`}
          >
            Перейти на страницу
          </Link>
        </Flex>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Flex paddingTop="15px" alignItems="center" fontWeight="700">
              <ExclamationCircle />
              Вы уверены, что отказаться?
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              border="1px solid"
              fontSize="14px"
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
              fontSize="14px"
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
    </Flex>
  );
}

export default CalendarTask;
