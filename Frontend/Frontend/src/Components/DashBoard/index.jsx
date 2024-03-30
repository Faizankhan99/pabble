/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-constant-condition */
import { Box, Button, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import style from "../DashBoard/dashboard.module.css";
import { useEffect, useState } from "react";
import AllTask from "./Task/AllTask";
import AddTask from "../AddTask";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { GetTask } from "../../Utils";

const Dashboard = () => {
  const [data, setData] = useState();
  const [useData, setUserData] = useState({});
  const { loginData } = useSelector((store) => store.auth);
  const [loading, setLoading] = useState(false);
  const [reloadData, setReloadData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);

  // ---------(UseEffect Function for Decode TOken for validation and it will render when loginData)-----------------------------------------------------------------

  useEffect(() => {
    if (loginData) {
      setUserData(jwtDecode(loginData.token));
    }
  }, [loginData]);

  // ---------------------(UseEffect Function for GetTaskBy Id and it will render when reloadData)-----------------------------------------------------------------

  useEffect(() => {
    if (useData.id) {
      setLoading(true);
      try {
        GetTask(useData.id).then((res) => {
          console.log("ress", res);
          localStorage.setItem("total", JSON.stringify(res.length));
          const filterData = res.filter((res) => {
            return res.status === "pending";
          });
          setData(filterData);
          //setData(res);
          localStorage.setItem("pending", JSON.stringify(filterData.length));
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
  console.log(
    "Datalenght-->",
    currentRecords,
    indexOfLastRecord,
    indexOfFirstRecord
  );

  return (
    <div>
      {/* --- ---------------------------------Main Heading---- ----------------------------- */}
      <div className={style.mainDiv}>
        <Heading>All Pending Tasks</Heading>
        <AddTask setReloadData={setReloadData} reloadData={reloadData} />
      </div>
      {/* ------ ----------------------------------- ( Api Error ) ------ ------------------------------------ */}
      {false ? <Heading color="red">Server error...</Heading> : ""}
      {/* --------- Tasks Component ------ */}
      <div>
        <AllTask
          data={currentRecords}
          setReloadData={setReloadData}
          reloadData={reloadData}
        />
      </div>

      {/* ------- ----------------------------------------------(Pagination Button)------ ----------------------------------------- */}
      <Box display="flex" justifyContent="space-around" mt="20px">
        <Button
          isDisabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </Button>
        <Button fontSize="20px" bgColor={"red"} w="15%">
          {currentPage}
        </Button>{" "}
        <Button
          isDisabled={data?.length <= 3}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </Button>
      </Box>
    </div>
  );
};

export default Dashboard;
