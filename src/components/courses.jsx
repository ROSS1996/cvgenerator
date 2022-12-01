import React, { useState } from "react";
import { v4 as uniqueKey } from "uuid";

function Courses(props) {

  const myCourses = props.coursesList.map((item) => (
    <li key={uniqueKey()} className="coursesItem">
      <h4>{item.date}</h4>
      <p>{item.courseName}</p> / <p>{item.institution}</p>
    </li>
  ));
  return <>{myCourses} </>;
}

export default Courses;
