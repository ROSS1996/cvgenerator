import React from "react";
import "./curriculum.css";

import Experience from "./components/experience";
import Education from "./components/education";
import Courses from "./components/courses";

import {
  SocialMedias,
  KeySkills,
  TechSkills,
  Languages,
} from "./components/other";

class Curriculum extends React.Component {
  constructor() {
    super();

    this.state = {
      editMode: false,
      profile: {
        fullName: "John Smith",
        role: "IT Project Manager",
        about: `IT Professional with more than 10 years of experience specializing in IT department management for international logistics companies. I can implement effective IT strategies at local and global levels. My greatest strength is business awareness. It enables me to permanently streamline infrastructure and applications.`,
        address: "Washington, DC",
        phone: "774-987-4009",
        email: "jsmith@uptwork.com",
        firstLanguage: "English",
      },
      languages: [
        { language: "Spanish", level: "Intermediate" },
        { language: "Portuguese", level: "Fluent" },
        { language: "French", level: "Basic" },
      ],
      socialMedias: [
        { website: "LinkedIn", address: "linkedin.com/johnutw" },
        { website: "Github", address: "github.com/johnutw" },
      ],
      keykills: [
        "Project Management",
        "Team Management",
        "Budget Management",
        "Change Management",
        "IT Strategy Development",
        "IT Process Analysis",
        "IT Integration and Migrations",
      ],
      techSkills: [
        "MS Windows Server 2003/2008",
        "Linux/Unix",
        "LAN, WAN, WLAN, SD-WAN",
        "Active Directory",
        "Cisco Routers",
        "SAP",
      ],
      jobHistory: [
        {
          dateStarted: "2012/11",
          dateFinished: "Present",
          company: "Software House",
          role: "Project Manager",
          mainAttributions: ["Responsible for creating, improving and developing IT project strategies",
            "Manage project teams and constructors",
            "Plan and monitor IT budgets",
            "Initiate and manage projects",
            "Manage key projects",
            ],
        },
        {
          dateStarted: "2005/11",
          dateFinished: "2012/11",
          company: "Support Consultant",
          role: "Project Manager",
          mainAttributions: ["Prepared infrastructure performance analysis",
            "Managed projects and support related to SAP modules",
            "Recommended optimization measures",
            "Implemented systems",
            ],
        },
      ],
      graduations: [
        {
          dateStarted: "2002/09",
          dateFinished: "2005/06",
          courseName: "Management and Information System",
          degree: "Masters",
          institution: "Texas A&M University",
        },
        {
          dateStarted: "1997/09",
          dateFinished: "2001/05",
          courseName: "Computer Science and Databases",
          degree: "Bachelor",
          institution: "Texas A&M University",
        },
      ],
      coursesTaken: [
        {
          date: "2014/05",
          courseName: "ITL Foundation v2",
          institution: "Texas A&M University",
        },
        {
          date: "2013/12",
          courseName: "ITL Foundation v3",
          institution: "Texas A&M University",
        },
        {
          date: "2011/07",
          courseName: "Lean It Foundation",
          institution: "Texas A&M University",
        },
      ],
    };
  }

  printCurriculum = () => {
    if (this.state.editMode === false) {
      window.print();
    }
  };

  toggleEdit = (button) => {
    button.target.classList.toggle("editButtonActive");
    const printButton = document.getElementById("printButton");
    printButton.classList.toggle("printButtonDisable");
    const sections = document.getElementsByClassName("section");
    if (this.state.editMode === false) {
      for (const section of sections) {
        const addButton = document.createElement("button");
        addButton.classList.add("addButton");
        addButton.innerText = "➕";
        section.appendChild(addButton);
      }
      document.getElementById("modification").classList.remove("hidden");
      this.setState({ editMode: true });
    } else if (this.state.editMode === true) {
      for (const section of sections) {
        section.lastChild.remove();
      }
      document.getElementById("modification").classList.add("hidden");
      this.setState({ editMode: false });
    }
  };

  editField = (field) => {
    if (field.target.id === "editName") {
      this.setState({
        profile: {
          ...this.state.profile,
          fullName: field.target.value,
        },
      });
    }
    if (field.target.id === "editRole") {
      this.setState({
        profile: {
          ...this.state.profile,
          role: field.target.value,
        },
      });
    }
    if (field.target.id === "editResume") {
      this.setState({
        profile: {
          ...this.state.profile,
          about: field.target.value,
        },
      });
    }
    if (field.target.id === "editAddress") {
      this.setState({
        profile: {
          ...this.state.profile,
          address: field.target.value,
        },
      });
    }
    if (field.target.id === "editPhone") {
      this.setState({
        profile: {
          ...this.state.profile,
          phone: field.target.value,
        },
      });
    }
    if (field.target.id === "editEmail") {
      this.setState({
        profile: {
          ...this.state.profile,
          email: field.target.value,
        },
      });
    }
    if (field.target.id === "editNative") {
      this.setState({
        profile: {
          ...this.state.profile,
          firstLanguage: field.target.value,
        },
      });
    }
  };

  render() {
    const { profile } = this.state;

    return (
      <div className="App">
        <div className="controlButtons">
          <button
            type="button"
            onClick={this.toggleEdit}
            className="editButton"
            id="editButton"
          >
            Edit Mode
          </button>
          <button
            type="button"
            onClick={this.printCurriculum}
            className="printButton"
            id="printButton"
          >
            Print
          </button>
        </div>
        <div className="main">
          <div id="modification" className="hidden">
            <div className="fields">
              <h3>Basic Information</h3>
              <label htmlFor="editName">Name</label>
              <input
                type="text"
                name="Name"
                id="editName"
                defaultValue={profile.fullName}
                onChange={this.editField}
              />
              <label htmlFor="editRole">Role</label>
              <input
                type="text"
                name="Role"
                id="editRole"
                onChange={this.editField}
                defaultValue={profile.role}
              />
              <label htmlFor="editResume">Resume</label>
              <textarea
                name="Resume"
                id="editResume"
                cols="30"
                rows="10"
                onChange={this.editField}
                defaultValue={profile.about}
              />
              <label htmlFor="editAddress">Address</label>
              <input
                type="text"
                name="Address"
                id="editAddress"
                onChange={this.editField}
                defaultValue={profile.address}
              />
              <label htmlFor="editPhone">Phone</label>
              <input
                type="tel"
                name="Phone"
                id="editPhone"
                onChange={this.editField}
                defaultValue={profile.phone}
              />
              <label htmlFor="editEmail">Email</label>
              <input
                type="email"
                name="Email"
                id="editEmail"
                onChange={this.editField}
                defaultValue={profile.email}
              />
              <label htmlFor="editNative">Native Language</label>
              <input
                type="text"
                name="NativeLanguage"
                id="editNative"
                onChange={this.editField}
                defaultValue={profile.firstLanguage}
              />
            </div>
            <div className="fields">
              <h3>Experience</h3>
              <label htmlFor="company">Company</label>
              <input type="text" name="Company" id="company" />
              <label htmlFor="company">Role</label>
              <input type="text" name="Role" id="role" />
              <label htmlFor="Start">Start Date</label>
              <input type="month" name="Start" id="experienceStart" />
              <label htmlFor="End">End Date</label>
              <input type="month" name="End" id="experienceEnd" />
              <fieldset>
                <legend>Key Attributions</legend>
                <input type="text" name="attribution1" id="attribution1" />
                <input type="text" name="attribution2" id="attribution2" />
                <input type="text" name="attribution3" id="attribution3" />
                <input type="text" name="attribution4" id="attribution4" />
                <input type="text" name="attribution5" id="attribution5" />
              </fieldset>
              <button type="button">Add</button>
            </div>
            <div className="fields">
              <h3>Education</h3>
              <label htmlFor="company">Course</label>
              <input type="text" name="Role" id="role" />
              <label htmlFor="company">Institution</label>
              <input type="text" name="Institution" id="institution" />
              <label htmlFor="Degree">Degree Level</label>
              <select name="Degree" id="degree">
                <option value="Associate">Associate</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="Master">Master</option>
                <option value="Doctorate">Doctorate</option>
              </select>
              <label htmlFor="Start">Start Date</label>
              <input type="month" name="Start" id="educationStart" />
              <label htmlFor="End">End Date</label>
              <input type="month" name="End" id="educationEnd" />
              <button type="button">Add</button>
            </div>
            <div className="fields">
              <h3>Courses</h3>
              <label htmlFor="company">Course</label>
              <input type="text" name="Role" id="role" />
              <label htmlFor="company">Institution</label>
              <input type="text" name="Institution" id="institution" />
              <label htmlFor="Date">Date</label>
              <input type="month" name="Date" id="courseDate" />
              <button type="button">Add</button>
            </div>
          </div>
          <div id="curriculum">
            <div id="header">
              <div>
                <h1 id="personName">{profile.fullName}</h1>
                <h2 id="personRole">{profile.role}</h2>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                alt="Candidate Portrait"
                className="photo"
                id="personPhoto"
              />
            </div>
            <section id="career">
              <p id="personResume">{profile.about}</p>
              <section id="experiencesSection">
                <div className="section">
                  <h3>Experience</h3>
                </div>
                <ul id="experienceList">
                  <Experience listOf={this.state.jobHistory}/>
                </ul>
              </section>
              <section id="educationSection">
                <div className="section">
                  <h3>Education</h3>
                </div>
                <ul id="education">
                  <Education listOf={this.state.graduations} />
                </ul>
              </section>
              <section id="coursesSection">
                <div className="section">
                  <h3>Courses</h3>
                </div>
                <ul id="courses">
                  <Courses listOf={this.state.coursesTaken} />
                </ul>
              </section>
            </section>
            <section id="info">
              <section id="personalData">
                <div className="sectionTwo">
                  <h3>Personal Data</h3>
                </div>
                <div>
                  <h4>Address</h4>
                  <p id="address">{profile.address}</p>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>{profile.phone}</p>
                </div>
                <div>
                  <h4>Email</h4>
                  <a href={"mailto://" + profile.email}>
                    {" "}
                    <p>{profile.email}</p>{" "}
                  </a>
                </div>
              </section>
              <section id="socialmedia">
                <h3 className="section">Social Media</h3>
                <ul>
                  <SocialMedias listOf={this.state.socialMedias} />
                </ul>
              </section>
              <section id="keySkills">
                <div className="section">
                  <h3>Key Skills</h3>
                </div>
                <ul>
                  <KeySkills listOf={this.state.keykills} />
                </ul>
              </section>
              <section id="techSkills">
                <h3 className="section">Technical Skills</h3>
                <ul>
                  <TechSkills listOf={this.state.techSkills} />
                </ul>
              </section>
              <section id="languages">
                <div className="section">
                  <h3>Languages</h3>
                </div>
                <ul>
                  <li>
                    <h4>{profile.firstLanguage}</h4>
                    <p>Native</p>
                  </li>
                  <Languages listOf={this.state.languages} />
                </ul>
              </section>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Curriculum;
