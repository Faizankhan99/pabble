/* eslint-disable react/prop-types */
import { Box, Heading, Avatar, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import style from "../dashboard.module.css";
import { AiOutlineFieldTime } from "react-icons/ai";
import DetailTask from "../DetailModel";

const AllTask = ({ data }) => {
  console.log("data", data);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editData, setEditData] = useState();

  const handleUpdate = (el) => {
    setIsModalVisible(true);
    setEditData(el);
  };

  console.log("editData", editData);

  return (
    <div>
      {data?.map((el) => (
        <div
          key={el._id.$oid}
          className={style.mainContainer}
          onClick={() => handleUpdate(el)}
        >
          <Avatar className={style.img} size="xl" name="Dan Abrahmov" />
          <div>
            <Heading size="xs" mt="5" ml="70%" color="#3e4192">
              status:- pending
            </Heading>
            <Heading size="lg" mt="40px">
              Complete NavBar Routing and Navigation
            </Heading>

            <div className={style.time}>
              <Box display="flex" alignItems="center" gap="1">
                <AiOutlineFieldTime />5 days Validity
              </Box>
              <Box display="flex" alignItems="center" gap="1">
                <AiOutlineFieldTime />
                20 June 2020
              </Box>
            </div>
          </div>
          <Button onClick={() => handleUpdate(el)} />
        </div>
      ))}

      {/* ------------------------(Modal for Task Status change)--------------------------  */}
      <DetailTask
        isOpen={isModalVisible}
        setIsOpen={setIsModalVisible}
        editData={editData}
      />
    </div>
  );
};

export default AllTask;
