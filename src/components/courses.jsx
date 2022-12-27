import React from "react";

function Courses(props) {
  const myCourses = props.coursesList.map((item) => (
    <li key={item.id} id={item.id} className="coursesItem">
      <h4>{item.date}</h4>
      <p>{item.courseName}</p> / <p>{item.institution}</p>
    </li>
  ));
  return (
    <section id="coursesSection">
      <div className="section" id="coursesNode">
        <h3>Courses</h3>
      </div>
      <ul id="courses">{myCourses}</ul>
    </section>
  );
}

export default Courses;
