import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SignUp.css';
import { SignUpApi } from '../../Services/UserService';
const nameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignUp(){
    const [userSignup, setUserSignup] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });



    const InputFirstName = (event) => {
        setUserSignup(preState => ({ ...preState, firstName: event.target.value }))
    }
    const InputLastName = (event) => {
        setUserSignup(preState => ({ ...preState, lastName: event.target.value }))
    }
    const InputEmail = (event) => {
        setUserSignup(preState => ({ ...preState, email: event.target.value }))
    }
    const InputPassword = (event) => {
        setUserSignup(preState => ({ ...preState, password: event.target.value }))
    }
    const InputConfirmPassword = (event) => {
        setUserSignup(preState => ({ ...preState, confirmPassword: event.target.value }))
    }

    const [regexSignup, setRegexSignup] = useState({
        firstNameError: false,
        firstNameHelperText: "",
        lastNameError: false,
        lastNameHelperText: "",
        emailError: false,
        emailHelperText: "",
        passwordError: false,
        passwordHelperText: "",
        confirmPasswordError: false,
        confirmPasswordHelperText: ""
    });

    const Submit=()=>{
        console.log(userSignup)
            let firstNameTest=nameRegex.test(userSignup.firstName)
            let lastNameTest= nameRegex.test(userSignup.lasttName)
            let emailTest=emailRegex.test(userSignup.email)
            let passwordTest=passwordRegex.test(userSignup.password)
            let confirmPasswordTest=passwordRegex.test(userSignup.confirmPassword)
            console.log(emailTest)
            console.log(passwordTest)
        if (nameRegex.test(userSignup.firstName) === false) {
            setRegexSignup(preState => ({ ...preState, firstNameError: true, firstNameHelperText: "Capital Letter" }))
        }
        else if (nameRegex.test(userSignup.firstName) === true) {
            setRegexSignup(preState => ({ ...preState, firstNameError: false, firstNameHelperText: "" }))
        }

        if (nameRegex.test(userSignup.lastName) === false) {
            setRegexSignup(preState => ({ ...preState, lastNameError: true, lastNameHelperText: "Capital Letter" }))
        }
        else if (nameRegex.test(userSignup.lastName) === true) {
            setRegexSignup(preState => ({ ...preState, lastNameError: false, lastNameHelperText: "" }))
        }

        if (emailRegex.test(userSignup.email) === false) {
            setRegexSignup(preState => ({ ...preState, emailError: true, emailHelperText: "Enter correct format" }))
        }
        else if (emailRegex.test(userSignup.email) === true) {
            setRegexSignup(preState => ({ ...preState, emailError: false, emailHelperText: "" }))
        }

        if (passwordRegex.test(userSignup.password) === false) {
            setRegexSignup(preState => ({ ...preState, passwordError: true, passwordHelperText: "Use 8 or more characters with a mix of letters, numbers & symbols" }))
        }
        else if (passwordRegex.test(userSignup.password) === true) {
            setRegexSignup(preState => ({ ...preState, passwordError: false, passwordHelperText: "" }))
        }

        if (passwordRegex.test(userSignup.confirmPassword) === false) {
            setRegexSignup(preState => ({ ...preState, confirmPasswordError: true, confirmPasswordHelperText: "" }))
        }
        else if (passwordRegex.test(userSignup.confirmPassword) === true) {
            setRegexSignup(preState => ({ ...preState, confirmPasswordError: false, confirmPasswordHelperText: "" }))
        }
        if(firstNameTest === true && lastNameTest === true && emailTest === true && passwordTest === true && confirmPasswordTest === true){
            SignUpApi(userSignup)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    return (
        <>
        <div className="maincontainer">
            <div className="middlesec">
                <form className="leftcontainer">
                    <div className="logo">
                        <img width={90} height={30} src="https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-File.png" alt="" />
                    </div>
                    <div className="createaccount">
                        Create your Google Account
                    </div>
                    <div className="namebox">
                        <div>
                            {/* <input className="inputfirstname" placeholder="First Name" /> */}
                            <TextField
                                onChange={InputFirstName}
                                error={regexSignup.firstNameError}
                                helperText={regexSignup.firstNameHelperText}
                                className="inputfirstname" id="outlined-basic" label="First Name" variant="outlined" size="small" />
                        </div>
                        <div>
                            {/* <input className="inputlastname" placeholder="Last Name" /> */}
                            <TextField
                            onChange={InputLastName}
                            error={regexSignup.lastNameError}
                            helperText={regexSignup.lastNameHelperText}
                            className="inputlastname" id="outlined-basic" label="Last Name" variant="outlined" size="small" />
                        </div>
                    </div>
                    <div className="email">
                        {/* <input className="inputemail" placeholder="Username" /> */}
                        <TextField 
                        onChange={InputEmail}
                        error={regexSignup.emailError}
                        helperText={regexSignup.emailHelperText}
                        className="inputemail" id="outlined-basic" label="Username or Phone" variant="outlined" size="small"/>
                    </div>
                    <div className="message">
                        You can use letters, numbers & periods
                    </div>
                    <div className="middlemessge">
                        Use my current email address instead
                    </div>
                    <div className="passwordbox">
                        <div>
                            {/* <input className="password" placeholder="Password" /> */}
                            <TextField
                            onChange={InputPassword}
                            error={regexSignup.passwordError}
                            helperText={regexSignup.passwordHelperText}
                            className="password" id="outlined-basic" label="Password" variant="outlined" size="small"/>
                        </div>
                        <div>
                            {/* <input className="confirm" placeholder="Confirm" /> */}
                            <TextField
                            onChange={InputConfirmPassword}
                            error={regexSignup.confirmPasswordError}
                            helperText={regexSignup.confirmPasswordHelperText}
                            className="confirm" id="outlined-basic" label="Confirm" variant="outlined" size="small"/>
                        </div>
                    </div>
                    <div className="bottommessage">
                        Use 8 or more characters with a mix of letters, numbers & symbols
                    </div>
                    <div className='checkbox'>
                        <input type= 'checkbox' value='Show Password' name = 'Show Password' /> <label>Show Pasword</label>
                    </div>
                    <div className="SignInAccount">
                        <a className="SignInAccountLink">Sign in instead</a>
                        <div className='next'>
                            {/* <button className="LoginButton">Next</button> */}
                            <Button onClick={Submit} className="LoginButton" variant="contained">Next</Button>
                        </div>
                    </div>
                </form>
                <div className="rightcontainer">
                    <div className="imagebox">
                        <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" />
                    </div>
                    <div className="msg">
                        One account. All of Google working for you.
                    </div>
                </div>
            </div>
            <div className="footer">
                <select className="language"> 
                    <option value="English">English (India)</option>
                    <option value="Hindi">हिन्दी</option>
                    <option value="Russian">беларуская</option>
                    <option value="Urdu">ქართული</option>
                </select>
                <div className="footercontent">
                    Help  &nbsp;  &nbsp;  &nbsp; Privacy &nbsp; &nbsp; &nbsp; Terms
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp