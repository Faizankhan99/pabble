/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "../DetailTask/detail.module.css";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { BiTimer } from "react-icons/bi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { GetTaskById } from "../../Utils";
import TaskModal from "../DashBoard/DetailModel";

const DetailTask = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState();
  const [reloadData, setReloadData] = useState(false);

  const [data, setData] = useState();
  const { id } = useParams();

  // ----------------------------------(GET DATE Function)-----------------------------------------------------------------
  const GetDate = (res) => {
    const date = new Date(res);
    console.log("resdata", date.toDateString());
    return date.toDateString();
  };

  // ----------------------------------(OPen Modal Function)-----------------------------------------------------------------

  const handleUpdate = (el) => {
    setIsModalVisible(true);
    setEditModal(true);
    setEditData(el);
  };

  // ---------------------(UseEffect Function for GetTaskBy Id and it will render when reloadData)-----------------------------------------------------------------
  useEffect(() => {
    GetTaskById(id)
      .then((res) => {
        console.log("result", res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reloadData]);

  return (
    <div className={style.DetailsMainDiv}>
      <div className={style.CourseDetailsBox}>
        <div>
          <Heading bg="rgba(0, 0, 0, 0.041)" p="4" fontSize={20}>
            <u>Title :- {data?.task}</u>
          </Heading>

          {/* ------------------ (Description) ----------------- */}
          <Box m="auto" display="flex" gap="4">
            <Heading mt="4" pl="4" fontSize={30}>
              Task Description
            </Heading>
          </Box>
          <Text
            whiteSpace="pre-line"
            pl="4"
            lineHeight="28px"
            fontSize={17}
            fontWeight="400"
          >
            {data?.description}
          </Text>
        </div>

        {/* --------- ------------------------------------ ( Detail Box ) ---- ---------------------------------------- */}
        <div className={style.CoursePreviewBox}>
          {/* ------- ----------------------------------- (Thumbnail)---- ------------------------------------- */}
          <Image borderRadius={10} src="" alt="thumb" />

          {/* ---- -------------------------------------- (Duration) --- --------------------------------- */}
          <Box p="5">
            <hr />
            <Box className={style.BoxBottom}>
              <Text>
                <HiOutlineCurrencyRupee />
                <b>Duration</b>
              </Text>
              <Box display="flex" gap={3}>
                <Heading display="flex" gap="2" color="#3e4192" fontSize={24}>
                  {data?.duration}
                </Heading>
              </Box>
            </Box>
            <hr />

            <hr />
            {/* --------------------------------- (Duration) ---- -------------------------------- */}
            <Box className={style.BoxBottom}>
              <Text>
                <BiTimer />
                <b>Status</b>
              </Text>
              <Box display="flex" gap={3}>
                <Text
                  color="#606060"
                  display="flex"
                  fontSize="17"
                  alignItems="center"
                  gap="3"
                >
                  <b>{data?.status}</b>
                </Text>
              </Box>
            </Box>

            <hr />
            {/* --- --------------------------------------- (Validity) --- --------------------------------- */}
            <Box className={style.BoxBottom}>
              <Text>
                <AiOutlineFieldTime />
                <b>Validity</b>
              </Text>
              <Box display="flex" gap={3}>
                <Text
                  color="rgb(78, 76, 76)"
                  display="flex"
                  fontSize="17"
                  alignItems="center"
                  gap="3"
                >
                  <b>{GetDate(data?.createdAt)}</b>
                </Text>
              </Box>
            </Box>
            <hr />
          </Box>

          {/* ------ ------------------------------ (Edit Button) ---- --------------------------------- */}
          <Button
            bg="#3e4192"
            color="#ffff"
            fontSize={20}
            p="6"
            w="90%"
            ml="4"
            _hover={{ bg: "teal" }}
            onClick={() => handleUpdate(data)}
          >
            <BsCart2 />
            &nbsp; Edit Task
          </Button>
        </div>
      </div>

      <TaskModal
        isOpen={isModalVisible}
        setIsOpen={setIsModalVisible}
        editData={editData}
        setReloadData={setReloadData}
        editModal={editModal}
        setEditModal={setEditModal}
      />
    </div>
  );
};

export default DetailTask;

/* <video tabindex="-1" class="video-stream html5-main-video" webkit-playsinline="" playsinline="" controlslist="nodownload" style="width: 299px; height: 168px; left: 0px; top: 0px;" src="blob:https://www.youtube.com/77f18630-87ef-4546-91dd-896344b67bab"></video> */
