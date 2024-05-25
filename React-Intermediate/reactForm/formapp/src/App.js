import './App.css';
import { useState } from 'react';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstNameHandler(event) {
  //   // console.log(" Printing first name")
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event) {
  //   // console.log(" Printing last name")
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState( {firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar: ""} );

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type ==="checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    //print
    console.log("printing entire form data")
    console.log(formData)
  } 

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input 
        type="text" 
        placeholder="first name"
        onChange={changeHandler}
        name="firstName"
        value={formData.firstName}
        />

<br></br>
<br></br>

        <input 
        type="text" 
        placeholder="last name"
        onChange={changeHandler}
        name="lastName"
        value={formData.lastName} 
        />

<br></br>
<br></br>

        <input
        type="email"
        placeholder="email id"
        onChange={changeHandler}
        name="email"
        value={formData.email}
        />

<br></br>
<br></br>

        <textarea
        placeholder="Enter your comments"
        onChange={changeHandler}
        name="comments"
        value={formData.comments}
        />

<br></br>
<br></br>

        <input
        type="checkbox"
        onChange={changeHandler}
        name="isVisible"
        id="isVisible"
        checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am i visible ?</label>

<br></br>
<br></br>

      <fieldset>
        <legend>Mode:</legend>
        <input 
        type="radio"
        onChange={changeHandler}
        name="mode"
        value="Online-Mode"
        id="Online-Mode"
        checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor='Online-Mode'>Online mode</label>

        <input 
        type="radio"
        onChange={changeHandler}
        name="mode"
        value="Offline-Mode"
        id="Offline-Mode"
        checked={formData.mode === "Offline-Mode"}
        />
        <label htmlFor='Offline-Mode'>Offline mode</label>
      </fieldset>

<br></br>

        <label htmlFor="favCar">Your favourite Car </label>
        <select
        name="favCar"
        id="favCar"
        value={formData.favCar}
        onChange={changeHandler}
        >
          <option value="Scorpio">Scorpio</option>
          <option value="Harrier">Harrier</option>
          <option value="Thar">Thar</option>
          <option value="Xuv700">Xuv700</option>
          <option value="Porsche">Porsche</option>
        </select>

<br></br>
<br></br>
        {/* <input type="submit" value="submit">Submit</input> */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
