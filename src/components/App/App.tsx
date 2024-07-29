import { useState } from "react";

import classes from "./App.module.scss";
import { Link } from "react-router-dom";
import About from "@/pages/about/About";
import AvatarPng from "@/assets/avatar.png";
import AvatarJpg from "@/assets/avatar.jpg";
import Calendar from "@/assets/calendar.svg";

function TODO() {
  TODO2();
}

function TODO2() {
  throw new Error();
}

export const App = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    // setCount((p) => p + 1)
    TODO();
  };

  // if (__PLATFORM__ === 'mobile') {
  //   return <div>ISMOBILEPLATFORM</div>
  // }

  // if (__PLATFORM__ === 'desktop') {
  //   return <div>ISDESKTOPPLATFORM</div>
  // }

  // TODO('rrr');

  return (
    <div data-testid={"App.DataTestId"}>
      <h1 data-testid={"Platform"}>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img width={100} src={AvatarPng} alt="" />
        <img width={100} src={AvatarJpg} alt="" />
      </div>
      <div>
        <Calendar color="green" width={100} height={100} />
      </div>
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/shop"}>shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={inc}>
        <span>INC</span>
      </button>
      <About />
    </div>
  );
};
