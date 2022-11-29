import React from "react";
import "./App.css";

class App extends React.Component {

    constructor() {
        super();

        this.state = {
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
    window.print();
  };

  render() {

    const { profile } = this.state;

    return (
      <div className="App">
        <div className="controlButtons">
          <button type="button" className="editButton">
            Edit Mode
          </button>
          <button
            type="button"
            onClick={this.printCurriculum}
            className="printButton"
          >
            Print
          </button>
        </div>
        <div id="curriculum">
          <div id="header">
            <div>
              <h1 id="personName">{profile.firstName} {profile.lastName}</h1>
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
              <h3 className="section">Experience</h3>
            </section>
            <section id="educationSection">
              <h3 className="section">Education</h3>
              <ul id="education"></ul>
            </section>
            <section id="coursesSection">
              <h3 className="section">Courses</h3>
              <ul id="courses"></ul>
            </section>
          </section>
          <section id="info">
            <section id="personalData">
              <h3 className="section">Personal Data</h3>
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
                <a href={'mailto://' + profile.email}> <p>{profile.email}</p> </a>
              </div>
            </section>
            <section id="socialmedia">
              <h3 className="section">Social Media</h3>
              <div></div>
            </section>
            <section id="keySkills">
              <h3 className="section">Key Skills</h3>
              <ul></ul>
            </section>
            <section id="techSkills">
              <h3 className="section">Technical Skills</h3>
              <ul></ul>
            </section>
            <section id="languages">
              <h3 className="section">Languages</h3>
              <ul>
                <li>
                  <h4>{profile.firstLanguage}</h4>
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
