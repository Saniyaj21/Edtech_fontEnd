import React from "react";


// import Nav from "../../../layout/header/Header";
import "./course.scss";
import CourseContainer from "../../components/CourseContainer";

function Course() {
  return (
    <div>
      <div className="search-container">
        <input type="text" placeholder="Search course..." />
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div className="course_container">
  <CourseContainer name="Python" />
  <CourseContainer name="java" />
  <CourseContainer name="javascript" />
  <CourseContainer name="reactJS" />
  <CourseContainer name="PHP" />
  <CourseContainer name="NodeJS" />
     </div>
    </div>
  );
}

export default Course;
