import React from "react";


function Edit(props) {
  function editar(event) {
    props.editState(event.target);
  }

  function newCourse(event) {
    event.preventDefault();
    props.addCourse(event.target)
  }

  function newGraduation(event) {
    event.preventDefault();
    props.addGraduation(event.target)
  }

  function newExperience(event) {
    event.preventDefault();
    props.addExperience(event.target)
  }

  function newSkill(event) {
    event.preventDefault();
    props.addSkill(event.target)
  }

  function newLanguage(event) {
    event.preventDefault();
    props.addLanguage(event.target)
  }

  function newSocialMedia(event) {
    event.preventDefault();
    props.addSocialMedia(event.target)
  }


  return (
    <div id="modification">
      <div className="fields">
        <h3>Basic Information</h3>
        <label htmlFor="editName">Name</label>
        <input
          type="text"
          name="Name"
          id="editName"
          placeholder="Full name"
          onChange={editar}
        />
        <label htmlFor="editRole">Role</label>
        <input
          type="text"
          name="Role"
          id="editRole"
          placeholder="Profession"
          onChange={editar}
        />
        <label htmlFor="editResume">Resume</label>
        <textarea
          name="Resume"
          id="editResume"
          cols="30"
          rows="10"
          placeholder="Resume"
          onChange={editar}
        />
        <label htmlFor="editAddress">Address</label>
        <input
          type="text"
          name="Address"
          id="editAddress"
          placeholder="Address"
          onChange={editar}
        />
        <label htmlFor="editPhone">Phone</label>
        <input
          type="tel"
          name="Phone"
          id="editPhone"
          placeholder="Phone Number"
          onChange={editar}
        />
        <label htmlFor="editEmail">Email</label>
        <input
          type="email"
          name="Email"
          id="editEmail"
          placeholder="Email"
          onChange={editar}
        />
        <label htmlFor="editNative">Native Language</label>
        <input
          type="text"
          name="NativeLanguage"
          id="editNative"
          placeholder="Native Language"
          onChange={editar}
        />
      </div>
      <div className="fields">
        <h3>Experience</h3>
        <form onSubmit={newExperience} className="fields">
          <label htmlFor="companyName">Company</label>
          <input type="text" name="companyName" id="companyName" />
          <label htmlFor="companyRole">Role</label>
          <input type="text" name="companyRole" id="companyRole" />
          <label htmlFor="experienceStart">Start Date</label>
          <input type="month" name="experienceStart" id="experienceStart" />
          <label htmlFor="experienceEnd">End Date</label>
          <input type="month" name="experienceEnd" id="experienceEnd" />
          <fieldset id="attributionList">
            <legend>Key Attributions</legend>
            <input type="text" name="attribution1" id="attribution1" />
            <input type="text" name="attribution2" id="attribution2" />
            <input type="text" name="attribution3" id="attribution3" />
            <input type="text" name="attribution4" id="attribution4" />
            <input type="text" name="attribution5" id="attribution5" />
          </fieldset>
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="fields">
        <h3>Education</h3>
        <form onSubmit={newGraduation} className="fields">
          <label htmlFor="gradCourse">Course</label>
          <input type="text" name="gradCourse" id="gradCourse" />
          <label htmlFor="gradInstitution">Institution</label>
          <input type="text" name="gradInstitution" id="gradInstitution" />
          <label htmlFor="degree">Degree Level</label>
          <select name="Degree" id="degree">
            <option value="Associate">Associate</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="Master">Master</option>
            <option value="Doctorate">Doctorate</option>
          </select>
          <label htmlFor="educationStart">Start Date</label>
          <input type="month" name="educationStart" id="educationStart" />
          <label htmlFor="educationEnd">End Date</label>
          <input type="month" name="educationEnd" id="educationEnd" />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="fields">
        <h3>Courses</h3>
        <form onSubmit={newCourse} className="fields">
          <label htmlFor="courseName">Course</label>
          <input type="text" name="courseName" id="courseName" />
          <label htmlFor="courseInstitution">Institution</label>
          <input type="text" name="courseInstitution" id="courseInstitution" />
          <label htmlFor="courseDate">Date</label>
          <input type="month" name="courseDate" id="courseDate" />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="fields">
        <h3>Skills</h3>
        <form onSubmit={newSkill} className="fields">
          <div id="skillType">
            <div className="skillRadios">
              <label htmlFor="techSkill">Tech Skill</label>
              <input type="radio" name="skillType" id="techSkill" value="techSkill"/>
            </div>
            <div className="skillRadios">
              <label htmlFor="keySkill">Key Skill</label>
              <input type="radio" name="skillType" id="keySkill"  value="keySkill"/>
            </div>
          </div>
          <label htmlFor="courseName">Skill</label>
          <input type="text" name="skillName" id="skillName" />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="fields">
        <h3>Language</h3>
        <form onSubmit={newLanguage} className="fields">
          <label htmlFor="languageName">Language</label>
          <input type="text" name="languageName" id="languageName" />
          <label htmlFor="languageLevel"></label>
          <select name="languageLevel" id="languageLevel">
            <optgroup label="Traditional Levels">
                <option value="Basic">Basic</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Fluent">Fluent</option>
            </optgroup>
            <optgroup label="CEFR Standard">
                <option value="A1 - Beginner">A1 - Beginner</option>
                <option value="A2 - Elementary">A2 - Elementary</option>
                <option value="B1 - Intermediate">B1 - Intermediate</option>
                <option value="B2 - Upper-Intermediate">B2 - Upper-Intermediate</option>
                <option value="C1 - Advanced">C1 - Advanced</option>
                <option value="C2 - Mastery">C2 - Mastery</option>
            </optgroup>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="fields">
        <h3>Social Medias</h3>
        <form onSubmit={newSocialMedia} className="fields">
          <label htmlFor="mediaName">Social Media</label>
          <input type="text" name="mediaName" id="mediaName" />
          <label htmlFor="mediaLink">Link</label>
          <input type="text" name="mediaLink" id="mediaLink" />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
