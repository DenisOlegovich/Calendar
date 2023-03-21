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
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';

function CalendarTask({ title, date, description, image, id, deleteEvent }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  const StyledLink = styled(Link)`
    text-decoration: none;
    border: none;
    color: #1890ff;
    font-size: 14px;
  `;

  return (
    <Flex maxW="1500px" justifyContent="space-between" borderBottom="1px solid">
      <Flex alignItems="center">
        <Image height="70px" width="70px" src={image} alt="Фотки нет" />
      </Flex>

      <Box w="50%">
        <Heading fontSize="14px" fontWeight="500">
          {capitalize(title)}
        </Heading>
        <Text fontSize="14px" isTruncated>
          {description}
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
          <StyledLink to={`/events/${id}`}>Перейти на страницу</StyledLink>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Удаление события</ModalHeader>
              <ModalCloseButton />
              <ModalBody>Вы уверены, что хотите удалить это событие?</ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => deleteEvent(id)}
                  
                >
                  Удалить
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Отмена
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      )}
    </Flex>
  );
}

export default CalendarTask;
