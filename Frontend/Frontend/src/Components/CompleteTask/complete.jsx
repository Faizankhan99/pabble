/* eslint-disable no-constant-condition */
import React from "react";
import { Heading } from "@chakra-ui/react";
import style from "../DashBoard/dashboard.module.css";
import { useState } from "react";
import AddTask from "../AddTask";
import AllTask from "../DashBoard/Task/AllTask";

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
export default function Complete() {
  const [data, setData] = useState(demo);

  return (
    <div>
      {/* ---------Main Heading------ */}
      <div className={style.mainDiv}>
        <Heading>Completed Task List</Heading>
        <AddTask />
      </div>

      {/* -------------- ( Api Error ) --------------- */}
      {false ? <Heading color="red">Server error...</Heading> : ""}
      {/* -------------- ( data loading ) --------------- */}
      {false ? <Heading color="teal">Loading...</Heading> : ""}

      {/* --------- Course Box ------ */}
      <div>
        <AllTask data={data} />
      </div>
    </div>
  );
}
