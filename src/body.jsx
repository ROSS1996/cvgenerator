import React from "react";
import { v4 as uniqueKey } from "uuid";

import Curriculum from "./curriculum";
import Edit from "./edit"

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      modalIsOpen: false,
      modalItems: '',
      profile: {
        fullName: "John Smith",
        role: "IT Project Manager",
        about: `IT Professional with more than 10 years of experience specializing in IT department management for international logistics companies. I can implement effective IT strategies at local and global levels. My greatest strength is business awareness. It enables me to permanently streamline infrastructure and applications.`,
        address: "Washington, DC",
        phone: "774-987-4009",
        email: "jsmith@uptwork.com",
        firstLanguage: "English",
      },
      languages: [],
      socialMedias: [],
      keySkills: [],
      techSkills: [],
      jobHistory: [],
      graduations: [],
      coursesTaken: [],
    };
  }

  openModal = (feed) => {
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
    this.setState({ modalItems: '' });
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
    const userName = document.getElementById('personName')
    if (this.state.editMode === false) {
      for (const section of sections) {
        const addButton = document.createElement("button");
        addButton.classList.add("addButton");
        addButton.innerText = "➕";
        section.appendChild(addButton);
        addButton.addEventListener('click', (e) => {
          this.setState({ modalItems: section.id });
          this.openModal(e.target.id)
        }
          )
      }
      this.setState({ editMode: true });
      userName.addEventListener('click', (e) => { 
        this.setState({ modalItems: e.target.id });
        this.openModal(e.target.id)
      })
    } else if (this.state.editMode === true) {
      for (const section of sections) {
        section.lastChild.remove();
      }
      this.setState({ editMode: false });
      userName.removeEventListener('click', this.openModal)
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

  addExperience = (info) => {
    let items = info.attributionList.children
    let attributions = []
    for (let i = 1; i <= 5; i++) {
      if (items[i].value !== undefined && items[i].value !== null && items[i].value.length > 0) { attributions.push(items[i].value) }
    }

    const newValue = {
      id: uniqueKey(),
      dateStarted: info.experienceStart.value.replace("-", "/"),
      dateFinished: info.experienceEnd.value.replace("-", "/"),
      role: info.companyRole.value,
      company: info.companyName.value,
      mainAttributions: attributions
    }
    this.setState(prevState => ({
      jobHistory: [...prevState.jobHistory, newValue]
    }))
  }

  addGraduation = (info) => {
    const newValue = {
      id: uniqueKey(),
      dateStarted: info.educationStart.value.replace("-", "/"),
      dateFinished: info.educationEnd.value.replace("-", "/"),
      courseName: info.gradCourse.value,
      degree: info.degree.value,
      institution: info.gradInstitution.value
    }
    this.setState(prevState => ({
      graduations: [...prevState.graduations, newValue]
    }))
  }

  addCourse = (info) => {
    const newValue = {id: uniqueKey(),date: info.courseDate.value.replace("-", "/"), courseName: info.courseName.value, institution: info.courseInstitution.value}
    this.setState(prevState => ({
      coursesTaken: [...prevState.coursesTaken, newValue]
    }))
  }

  addSkill = (info) => {
    if (info.skillType.value === "techSkill") {
      this.setState(prevState => ({
        techSkills: [...prevState.techSkills, info.skillName.value]
      }))
    }
    else if (info.skillType.value === "keySkill") {
      this.setState(prevState => ({
        keySkills: [...prevState.keySkills, info.skillName.value]
      }))
    }
  }

  addLanguage = (info) => {
      this.setState(prevState => ({
        languages: [...prevState.languages, {language: info.languageName.value, level: info.languageLevel.value}]
      }))
  }

  addSocialMedia = (info) => {
    const noProtocol = info.mediaLink.value.replace("http://", "").replace("https://", "").replace("www.", "").trim()
    this.setState(prevState => ({
      socialMedias: [...prevState.socialMedias, {website: info.mediaName.value, address: noProtocol}]
    }))
}

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
          <Curriculum
            userProfile={this.state.profile}
            userLanguages={this.state.languages}
            userSM={this.state.socialMedias}
            userKS={this.state.keySkills}
            userTS={this.state.techSkills}
            userXP={this.state.jobHistory}
            userGRAD={this.state.graduations}
            userCourses={this.state.coursesTaken}
          />
          {this.state.editMode === true &&
          <Edit
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
            modalChange={this.state.modalItems}
            editState={this.editField}
            addCourse={this.addCourse}
            addGraduation={this.addGraduation}
            addExperience={this.addExperience}
            addSkill={this.addSkill}
            addLanguage={this.addLanguage}
            addSocialMedia={this.addSocialMedia}
          /> }
        </div>
      </div>
    );
  }
}

export default Body;
