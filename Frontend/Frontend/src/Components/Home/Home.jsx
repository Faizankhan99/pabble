/* eslint-disable no-unused-vars */
import React from "react";

function Home() {
  const styles = {
    backgroundImage: `url(
      "https://www.cflowapps.com/wp-content/uploads/2018/07/task-management-process.png"
    )`,
    height: "850px",
    marginTop: "2%",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    border: "1px solid red",
  };
  return (
    <>
      <div style={styles}></div>
    </>
  );
}

export default Home;
