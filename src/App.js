
import React, {useState, useEffect} from "react";
function App() {
  const [form, setForm]= useState({
    name: '',
    email: '',
    age: '',
    mobile: '',
    gender:''})
    const [display, setDisplay]= useState([])

// get all people
 useEffect(() => {
  fetch('http://localhost:5600/event-goers')
    .then((response) => response.json())
    .then(data => setDisplay(data))
 }, []);

// create a person

// remove a person

  return (
    <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 col-lg-6">
        <form>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Full Name </label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Age</label>
          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="age"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
          <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="mobile number"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Gender</label>
          <input type="select" class="form-control" id="exampleFormControlInput1" placeholder="gender"/>
        </div>
        
        </form>
          </div>
          <div className="col-12 col-md-7 col-lg-6">
            <ul>
              <li>Attendee 1</li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default App;
