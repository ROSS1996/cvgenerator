import React from "react";
import "./App.css";

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            editMode: false,
            profile: {
                firstName: 'John',
                lastName: 'Smith',
                role: 'IT Project Manager',
                about: `IT Professional with more than 10 years of experience specializing in IT department management for international logistics companies.
                I can implement effective IT strategies at local and global levels. My greatest strength is business awareness.
                It enables me to permanently streamline infrastructure and applications.`,
                address: 'Washington, DC',
                phone: '774-987-4009',
                email: 'jsmith@uptwork.com',
                firstLanguage: 'English'
            }
        }


    }

  printCurriculum = () => {
    if (this.state.editMode === false) {
        window.print();
    }
  };

  toggleEdit = (button) => {
    button.target.classList.toggle('editButtonActive')
    const printButton = document.getElementById('printButton')
    printButton.classList.toggle('printButtonDisable')
    const sections = document.getElementsByClassName('section');
    const editable = document.getElementsByClassName('editable')
    if (this.state.editMode === false) {
        for (const section of sections) {
            const addButton = document.createElement("button")
            addButton.classList.add('addButton')
            addButton.innerText = "➕"
            section.appendChild(addButton)
        }
        for (const item of editable) {
            item.classList.add('editActive')
        }
        this.setState({editMode: true});
    }
    else if (this.state.editMode === true) {
        for (const section of sections) {
            section.lastChild.remove()
        }
        for (const item of editable) {
            item.classList.remove('editActive')
        }
        this.setState({editMode: false});
    }
  }

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
        <div id="curriculum">
          <div id="header">
            <div>
              <h1 id="personName" className="editable">{profile.firstName} {profile.lastName}</h1>
              <h2 id="personRole" className="editable">{profile.role}</h2>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              alt="Candidate Portrait"
              className="photo"
              id="personPhoto"
            />
          </div>
          <section id="career">
            <p id="personResume" className="editable">{profile.about}</p>
            <section id="experiencesSection">
              <div className="section">
                  <h3>Experience</h3>
              </div>
            </section>
            <section id="educationSection">
              <div className="section">
                  <h3>Education</h3>
              </div>
              <ul id="education"></ul>
            </section>
            <section id="coursesSection">
              <div className="section">
                  <h3>Courses</h3>
              </div>
              <ul id="courses"></ul>
            </section>
          </section>
          <section id="info">
            <section id="personalData">
              <div className="sectionTwo">
                  <h3>Personal Data</h3>
              </div>
              <div>
                <h4>Address</h4>
                <p id="address" className="editable">{profile.address}</p>
              </div>
              <div>
                <h4>Phone</h4>
                <p className="editable">{profile.phone}</p>
              </div>
              <div>
                <h4>Email</h4>
                <a href={'mailto://' + profile.email}> <p className="editable">{profile.email}</p> </a>
              </div>
            </section>
            <section id="socialmedia">
              <h3 className="section">Social Media</h3>
              <div></div>
            </section>
            <section id="keySkills">
              <div className="section">
                  <h3>Key Skills</h3>
              </div>
              <ul></ul>
            </section>
            <section id="techSkills">
              <h3 className="section">Technical Skills</h3>
              <ul></ul>
            </section>
            <section id="languages">
              <div className="section">
                  <h3>Languages</h3>
              </div>
              <ul>
                <li>
                  <h4 className="editable">{profile.firstLanguage}</h4>
                  <p>Native</p>
                </li>
              </ul>
            </section>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
