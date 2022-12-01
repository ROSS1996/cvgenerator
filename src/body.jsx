import React from "react";

import Curriculum from "./curriculum";
import Edit from "./edit";

class Body extends React.Component {
  constructor(props) {
    super(props);
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
          mainAttributions: [
            "Responsible for creating, improving and developing IT project strategies",
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
          mainAttributions: [
            "Prepared infrastructure performance analysis",
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
    if (field.id === "editName") {
      this.setState({
        profile: {
          ...this.state.profile,
          fullName: field.value,
        },
      });
    }
    if (field.id === "editRole") {
      this.setState({
        profile: {
          ...this.state.profile,
          role: field.value,
        },
      });
    }
    if (field.id === "editResume") {
      this.setState({
        profile: {
          ...this.state.profile,
          about: field.value,
        },
      });
    }
    if (field.id === "editAddress") {
      this.setState({
        profile: {
          ...this.state.profile,
          address: field.value,
        },
      });
    }
    if (field.id === "editPhone") {
      this.setState({
        profile: {
          ...this.state.profile,
          phone: field.value,
        },
      });
    }
    if (field.id === "editEmail") {
      this.setState({
        profile: {
          ...this.state.profile,
          email: field.value,
        },
      });
    }
    if (field.id === "editNative") {
      this.setState({
        profile: {
          ...this.state.profile,
          firstLanguage: field.value,
        },
      });
    }
  };

  render() {
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
          <Edit editState={this.editField} />
          <Curriculum
            userProfile={this.state.profile}
            userLanguages={this.state.languages}
            userSM={this.state.socialMedias}
            userKS={this.state.keykills}
            userTS={this.state.techSkills}
            userXP={this.state.jobHistory}
            userGRAD={this.state.graduations}
            userCourses={this.state.coursesTaken}
          />
        </div>
      </div>
    );
  }
}

export default Body;
