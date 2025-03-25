import React, { useState } from "react";
import ProfileImg from "../assets/profile.jpg";
import Project from "./Projects";

const Wrapper = () => {
  return (
    <div className="my-4 lg:w-4/6 md:w-5/6  flex flex-col justify-center mx-auto">
      <Banner />
      <Project />
      <div className=""></div>
      <div className="">Container 2</div>
      <div className="">Container 3</div>
      <div className="">Container 4</div>
    </div>
  );
};

const Banner = () => {
  return (
    <>
      <div
        id="Banner"
        className=" box grid grid-cols-3 gap-3 px-7 py-11 m-4 rounded-2xl"
      >
        <div className=" flex  col-span-2 items-center justify-center">
          <div className=" w-3/4 h-auto">
            <p className="font-light w-full text-left text-3xl text-stone-400 ">
              Omar Rico
            </p>

            <span className="w-full font-black text-6xl my-3.5 text-stone-300">
              Junior Software Developer
            </span>
            <h2 className=" my-3 text-xl text-left text-stone-400">
              Welcome to my portfolio!I am a junior developer with 2 years of
              experience building and designing web applications. I have a
              constant desire to learn and create solutions. Living in Ireland
              for the last 7 years helped me to immerse myself in the tech
              community and contribute to diverse projects with a passion for
              programming and a desire to contribute to meaningful projects.
            </h2>
          </div>
        </div>
        <div className="">
          <img className="profile-picture" src={ProfileImg}></img>
        </div>
      </div>
    </>
  );
};

const home = [
  { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
];

export default Wrapper;
