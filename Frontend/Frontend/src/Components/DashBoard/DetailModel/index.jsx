/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Select,
  Button,
  Text,
  useToast,
  Box,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { DeleteTask, EditStatus, EditTaskData } from "../../../Utils";

const initial = {
  task: "",
  description: "",
  duration: "",
};

const TaskModal = ({
  isOpen,
  setIsOpen,
  editData,
  setReloadData,
  reloadData,
  editModal,
  setEditModal,
}) => {
  const [value, setValue] = useState();
  const [text, setText] = useState(initial);

  const toast = useToast();

  const onClose = () => {
    setIsOpen(false);
  };

  console.log("editModal", editModal);

  //  -------------------------------(HANDLE EDIT STATUS FUNCTION)---------------------------------
  const handleEdit = async (e) => {
    e.preventDefault();
    console.log("value", value, editData);
    if (editData.status !== value) {
      try {
        EditStatus(editData, value).then((res) => {
          if (res) {
            toast({
              title: "Status Updated Successfully",
              status: "info",
              duration: 2000,
              isClosable: true,
              position: "top",
            });
            setReloadData(!reloadData);
            onClose();
          }
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      toast({
        title: "Status Already Present please change",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  function handlechange(e) {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  }

  //  -------------------------------(HANDLE DELETE FUNCTION)---------------------------------

  const handleDeleteTask = async () => {
    console.log("editData", editData?._id);
    DeleteTask(editData)
      .then((res) => {
        if (res) {
          toast({
            title: "Task Delete Successfully",
            status: "info",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          setReloadData(!reloadData);
          setIsOpen(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //  -------------------------------(HANDLE EDIT DATA FUNCTION)---------------------------------

  const handleEditDta = async (e) => {
    e.preventDefault();
    EditTaskData(text, editData)
      .then((res) => {
        console.log(res);
        if (res) {
          toast({
            title: "Task Updated Successfully",
            status: "info",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          setReloadData(!reloadData);
          onClose();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pb="4" bg="#f3f7fd" mt="40" w="50%">
          <ModalHeader>Task status</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {editModal === true ? (
              <form action="" onSubmit={handleEditDta}>
                <FormLabel ml="3px">Title</FormLabel>
                <Input
                  placeholder="Enter Title"
                  borderBottom="1px solid black"
                  value={text.value}
                  name="task"
                  onChange={handlechange}
                />
                <FormLabel ml="3px">Description</FormLabel>
                <Textarea
                  placeholder="Enter description of task."
                  borderBottom="1px solid black"
                  value={text.value}
                  name="description"
                  onChange={handlechange}
                />
                <FormLabel ml="3px">Duration for complete</FormLabel>
                <Input
                  placeholder="Enter Duration"
                  borderBottom="1px solid black"
                  value={text.value}
                  name="duration"
                  onChange={handlechange}
                />
                <Input
                  type="submit"
                  mt="5%"
                  //   ml="30%"
                  bg="red"
                />
              </form>
            ) : editData?.status === "pending" ? (
              <Box>
                <Text fontSize="20px">{editData?.task}</Text>
                <Select onChange={(e) => setValue(e.target.value)}>
                  <option value="" selected disabled hidden>
                    Change status
                  </option>
                  <option value="pending">pending</option>
                  <option value="done">Done</option>
                  {/* <option value="">backlog</option> */}
                </Select>
                <Button mt="8" w="100%" bg="teal" onClick={handleEdit}>
                  Edit
                </Button>
              </Box>
            ) : editData?.status === "done" ? (
              <Box>
                <Text fontSize="20px">
                  Are sure you want to delete this task?
                </Text>
                <Button mt="8" w="100%" bg="teal" onClick={handleDeleteTask}>
                  DELETE
                </Button>
              </Box>
            ) : (
              ""
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TaskModal;
