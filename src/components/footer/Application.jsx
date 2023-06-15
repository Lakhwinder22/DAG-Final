import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Aapplication = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [altContact, setAltContact] = useState('');
  const [email, setEmail] = useState('');
  const [fatherOccupation, setFatherOccupation] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherDesignation, setFatherDesignation] = useState('');
  const [motherName, setMotherName] = useState('');
  const [motherOccupation, setMotherOccupation] = useState('');
  const [motherDesignation, setMotherDesignation] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDOB] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [Boards, setBoards] = useState('');
  const [Board, setBoard] = useState('');
  const [marks, setMarks] = useState('');
  const [ProgramIntrested, setProgramIntrested] = useState('');
  const [collegePreference, setCollegePreference] = useState('');
  const [collegeNam, setCollegeNam] = useState('');
  const [Boardss, setBoardss] = useState('');
  const [markss, setMarkss] = useState('');
  const [collegeNames, setCollegeNames] = useState('');
  const [mars, setMars] = useState('');
  const [AnyNotes, setAnyNotes] = useState('');
  const [Reference, setReference] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, contact, altContact, email, fatherOccupation, fatherName, fatherDesignation,
        motherName, motherOccupation, motherDesignation, address, dob, gender, category,
        collegeName, Boards, Board, marks, ProgramIntrested, collegePreference, collegeNam,
        Boardss, markss, collegeNames, mars, AnyNotes, Reference
      })
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 401 || !data) {
      console.log("error")
    } else {
      setShow(true);
      // setEmail("")
      console.log("Email sent")
    }
  }


  return (
    <>
      {
        show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          Your Application Succesfully Send
        </Alert> : ""
      }
      <div className='appmain'>
        <div className='appheader'>
          <div className='call' >
            <div className='row'>
              <div className='col'>

                <form >
                  <h2 className='appli'>Common Application Form</h2>
                  <br></br>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                  <br />
                  <br></br>
                  <label htmlFor="contact">Contact Number:</label>
                  <input type="tel" id="contact" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} pattern="[0-9]{10}" required />
                  <br />
                  <br></br>
                  <label htmlFor="altContact">Alternate Number:</label>
                  <input type="tel" id="altContact" name="altContact" value={altContact} onChange={(e) => setAltContact(e.target.value)} pattern="[0-9]{10}" required />
                  <br />
                  <br></br>

                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <br />
                  <br></br>
                  <label htmlFor="fatherName">Father's Name:</label>
                  <input type="text" id="fatherName" name="fatherName" value={fatherName} onChange={(e) => setFatherName(e.target.value)} required />
                  <br />
                  <br></br>
                  <label htmlFor="fatherOccupation">Father's Occupation:</label>
                  <input type="text" id="fatherOccupation" name="fatherOccupation" value={fatherOccupation} onChange={(e) => setFatherOccupation(e.target.value)} required />
                  <br />
                  <br></br>
                  <label htmlFor="fatherDesignation">Father's Designation:</label>
                  <input type="text" id="fatherDesignation" name="fatherDesignation" value={fatherDesignation} onChange={(e) => setFatherDesignation(e.target.value)} required />
                  <br />
                  <br></br>
                  <label htmlFor="motherName">Mother's Name:</label>
                  <input type="text" id="motherName" name="motherName" value={motherName} onChange={(e) => setMotherName(e.target.value)} required />
                  <br />
                  <br></br>
                  <label htmlFor="motherOccupation">Mother's Occupation:</label>
                  <input type="text" id="motherOccupation" name="motherOccupation" value={motherOccupation} onChange={(e) => setMotherOccupation(e.target.value)} required />
                  <br />
                  <br></br>
                  <label htmlFor="motherDesignation">Mother's Designation:</label>
                  <input type="text" id="motherDesignation" name="motherDesignation" value={motherDesignation} onChange={(e) => setMotherDesignation(e.target.value)} required />
                  <br />
                  <br></br>
                  <label htmlFor="address">Address:</label>
                  <textarea id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
                  <br />
                  <br />
                  <label htmlFor="dob">Date of Birth:</label>
                  <input type="date" id="dob" name="dob" value={dob} onChange={(e) => setDOB(e.target.value)} required />
                  <br />
                  <br />
                  <label htmlFor="gender">Gender:</label>
                  <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <br />
                  <br />
                  <label htmlFor="catagory">Catagory:</label>
                  <select id="catagory" name="catagory" value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select</option>
                    <option value="OBC">OBC</option>
                    <option value="General">General</option>
                    <option value="SC/ST">SC/ST</option>
                    <option value="other">Others</option>
                  </select>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div className='educ'>
                    <h5>Please Fill up All Details with your Educational Qualifications</h5></div>
                  <br></br>
                  <h5><strong>For Secondary 10th </strong></h5>
                  <br />
                  <br></br>
                  <label htmlFor="collegeNam">School Name:</label>
                  <input type="text" id="collegeNam" name="collegeNam" value={collegeNam} onChange={(e) => setCollegeNam(e.target.value)} required />

                  <br />
                  <br></br>
                  <label htmlFor="Boards">Board:</label>
                  <input type="Boards" id="Boards" name="Boards" value={Boards} onChange={(e) => setBoards(e.target.value)} required />


                  <br></br>

                  <label htmlFor="Marks">Marks %:</label>
                  <input type="number" id="marks" name="marks" value={marks} onChange={(e) => setMarks(e.target.value)} pattern="[0-9]{10}" required />
                  <br />

                  <br></br>

                  <h5><strong>For Higher Secondary 12th </strong></h5>
                  <br />

                  <label htmlFor="collegeName">School Name:</label>
                  <input type="text" id="collegeName" name="collegeName" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} required />

                  <br />
                  <br></br>
                  <label htmlFor="Boardss">Board:</label>
                  <input type="Boardss" id="Boardss" name="Boardss" value={Boardss} onChange={(e) => setBoardss(e.target.value)} required />

                  <br></br>
                  <label htmlFor="Markss">Marks %:</label>
                  <input type="number" id="markss" name="markss" value={markss} onChange={(e) => setMarkss(e.target.value)} pattern="[0-9]{10}" required />
                  <br />

                  <br></br>

                  <h5><strong></strong> </h5>
                  <br />

                  <label htmlFor="collegeNames">college Name:</label>
                  <input type="text" id="collegeNames" name="collegeNames" value={collegeNames} onChange={(e) => setCollegeNames(e.target.value)} required />

                  <br />
                  <br></br>
                  <label htmlFor="Board">Board:</label>
                  <input type="text" id="board" name="board" value={Board} onChange={(e) => setBoard(e.target.value)} required />

                  <br></br>
                  <label htmlFor="Mars">Marks %:</label>
                  <input type="number" id="mars" name="mars" value={mars} onChange={(e) => setMars(e.target.value)} pattern="[0-9]{10}" required />
                  <br />
                  <br />

                  <label htmlFor="Program Intrested">Program Intrested :</label>
                  <select id="Program Intrested" name="Program Intrested" value={ProgramIntrested} onChange={(e) => setProgramIntrested(e.target.value)} required>
                    <option value="">Select</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Post Graduation">Post Graduation</option>
                    <option value="other">OTHERS</option>
                  </select><br />

                  <br></br>

                  <label htmlFor="college Preference">College Preference:</label>
                  <input type="text" id="college Preference" name="college Preference" value={collegePreference} onChange={(e) => setCollegePreference(e.target.value)} required />

                  <br></br>
                  <br></br>


                  <label htmlFor="any Notes">Any Notes:</label>
                  <input type="text" id="any notes" name="any notes" value={AnyNotes} onChange={(e) => setAnyNotes(e.target.value)} required />

                  <br></br>
                  <br></br>

                  <label htmlFor="Reference">Reference:</label>
                  <input type="text" id="reference" name="reference" value={Reference} onChange={(e) => setReference(e.target.value)} required />


                  <br></br>
                  <br></br>
                  <button type="submit" variant="primary" onClick={handleSubmit} >Submit Form</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Aapplication