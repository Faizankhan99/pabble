/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import React, { useEffect } from "react";
import { Box, Button, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import style from "../DashBoard/dashboard.module.css";
import { useState } from "react";
import AllTask from "../DashBoard/Task/AllTask";
import { GetTask } from "../../Utils";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";

export default function Complete() {
  const [data, setData] = useState();
  const [useData, setUserData] = useState({});
  const { loginData } = useSelector((store) => store.auth);
  const [loading, setLoading] = useState(false);
  const [reloadData, setReloadData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);

  useEffect(() => {
    if (loginData) {
      setUserData(jwtDecode(loginData.token));
    }
  }, [loginData]);

  //  -------------------------------(USEEEFECT FOT GETTASK AND IT RENDER BOTH DEPENDENDENCY)---------------------------------

  useEffect(() => {
    if (useData.id) {
      setLoading(true);
      try {
        GetTask(useData.id).then((res) => {
          const filterData = res.filter((res) => {
            return res.status === "done";
          });
          localStorage.setItem("done", JSON.stringify(filterData.length));
          setData(filterData);
          setLoading(false);
        });
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
  }, [useData, reloadData]);

  // ------------(Data Loading Effect)----------------
  if (loading) {
    return (
      <Stack mt="10%">
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
      </Stack>
    );
  }

  // -------------------------( pagination Logic) ------------------------------------
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data?.slice(indexOfFirstRecord, indexOfLastRecord);
  console.log("Datalenght-->", currentRecords);

  return (
    <div>
      {/* ---------Main Heading------ */}
      <div className={style.mainDiv}>
        <Heading>Completed Task List</Heading>
      </div>

      {/* -------------- ( Api Error ) --------------- */}
      {false ? <Heading color="red">Server error...</Heading> : ""}
      {/* -------------- ( data loading ) --------------- */}
      {false ? <Heading color="teal">Loading...</Heading> : ""}

      {/* --------- Course Box ------ */}
      <div>
        <AllTask
          data={currentRecords}
          setReloadData={setReloadData}
          reloadData={reloadData}
        />
      </div>

      {/* --------------------------(Pagination Button)-------------------- */}
      <Box display="flex" justifyContent="space-around" mt="20px">
        <Button
          isDisabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </Button>
        <Button fontSize="20px" bgColor={"red"} w="15%">
          {currentPage}
        </Button>
        <Button
          isDisabled={data?.length <= 3}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </Button>
      </Box>
    </div>
  );
}
