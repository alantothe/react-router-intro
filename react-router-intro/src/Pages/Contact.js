
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ContactPage = () => {
    const  navigate = useNavigate()
    const goHome = () => {
          navigate("/")
    }
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    return (
        <div>
            <h1>Contact Page</h1>
            <input type="text" placeholder="First Name" onChange={(e) => { setFirstName(e.target.value) }} />
            <br/>
            <input type="text" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value) }} />
            <br/>
            <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
            <br/>
            <button onClick={goHome}>Submit</button>
        </div>
    )
};





export default ContactPage;