import React, { useState } from "react";

function Edit(props) {
  function editar(event) {
    props.editState(event.target);
  }

  return (
    <div id="modification" className="hidden">
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
  );
}

export default Edit;
