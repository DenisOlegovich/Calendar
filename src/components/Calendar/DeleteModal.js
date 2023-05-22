import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
} from '@chakra-ui/react';
import ExclamationCircle from '../Icons/ExclamationCircle';

function DeleteModal(isOpen, onClose, id, deleteEvent) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
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
  );
}

export default DeleteModal;
