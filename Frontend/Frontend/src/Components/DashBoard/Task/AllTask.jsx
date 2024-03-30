/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Heading, Avatar, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import style from "../dashboard.module.css";
import { AiOutlineFieldTime } from "react-icons/ai";
import TaskModal from "../DetailModel";
import { Link } from "react-router-dom";

const AllTask = ({ data, setReloadData, reloadData }) => {
  console.log("data1", data);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editData, setEditData] = useState();
  const Name = JSON.parse(localStorage.getItem("user")); // for getting name from localStorage

  /* ------------------------(GET DATE FUNCTION)--------------------------  */

  const GetDate = (res) => {
    const date = new Date(res);
    console.log("resdata", date.toDateString());
    return date.toDateString();
  };

  /* ------------------------(Modal OPEN FUNCTION)--------------------------  */

  const handleUpdate = (el) => {
    setIsModalVisible(true);
    setEditData(el);
  };

  console.log("editData", editData);

  return (
    <div>
      {/* ------------------------(MAPPING THE DATA)--------------------------  */}

      {data?.map((el) => (
        <div key={el._id} className={style.mainContainer}>
          <Link to={`/task/${el._id}`}>
            <Avatar className={style.img} size="xl" name={Name} />
          </Link>
          <div>
            <Heading
              size="xs"
              mt="5"
              ml="60%"
              color="#3e4192"
              onClick={() => handleUpdate(el)}
            >
              status:-{el.status}
            </Heading>
            <Heading size="lg" mt="40px">
              {el.task}
            </Heading>

            <div className={style.time}>
              <Box display="flex" alignItems="center" gap="1">
                <AiOutlineFieldTime />
                {el.duration}
              </Box>

              <Box display="flex" alignItems="center" gap="1">
                <AiOutlineFieldTime />
                {GetDate(el.createdAt)}
              </Box>
            </div>
          </div>
          <Link to={`/task/${el._id}`}>
            <Button onClick={() => handleUpdate(el)} />
          </Link>
        </div>
      ))}

      {/* ------------------------(Modal for Task Status change)--------------------------  */}
      <TaskModal
        isOpen={isModalVisible}
        setIsOpen={setIsModalVisible}
        editData={editData}
        setReloadData={setReloadData}
        reloadData={reloadData}
      />
    </div>
  );
};

export default AllTask;
