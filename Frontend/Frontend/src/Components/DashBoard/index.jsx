/* eslint-disable no-constant-condition */
import { Heading, Skeleton, Stack } from "@chakra-ui/react";
import style from "../DashBoard/dashboard.module.css";
import { useState } from "react";
import AllTask from "./Task/AllTask";
import AddTask from "../AddTask";

const demo = [
  {
    _id: {
      $oid: "1",
    },
    thumbnail:
      "https://e1.pxfuel.com/desktop-wallpaper/574/84/desktop-wallpaper-net-full-stack-developer-full-stack-thumbnail.jpg",
    title: "Full stack Web Developer",
    description:
      "Prepare for a career as a full stack developer. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.",
    price: 20000,
    teacher: "Faizan khan",
    duration: "6720",
    validity: "6",
    videolink: "",
    __v: 0,
  },
  {
    _id: {
      $oid: "2",
    },
    thumbnail:
      "https://e1.pxfuel.com/desktop-wallpaper/574/84/desktop-wallpaper-net-full-stack-developer-full-stack-thumbnail.jpg",
    title: "Full stack Web Developer",
    description:
      "Prepare for a career as a full stack developer. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.",
    price: 20000,
    teacher: "Faizan khan",
    duration: "6720",
    validity: "6",
    videolink: "",
    __v: 0,
  },
];

const Dashboard = () => {
  const [data, setData] = useState(demo);

  // ------------(Data Loading Effect)----------------
  if (false) {
    return (
      <Stack mt="1%">
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
      </Stack>
    );
  }

  return (
    <div>
      {/* ---------Main Heading------ */}
      <div className={style.mainDiv}>
        <Heading>All Pending Tasks</Heading>
        <AddTask />
      </div>

      {/* -------------- ( Api Error ) --------------- */}
      {false ? <Heading color="red">Server error...</Heading> : ""}

      {/* --------- Tasks Component ------ */}
      <div>
        <AllTask data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
