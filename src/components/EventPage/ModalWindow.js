import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Flex,
  Spacer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
} from '@chakra-ui/react';
function ModalWindow() {
  return (
    <>
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
    </>
  );
}
