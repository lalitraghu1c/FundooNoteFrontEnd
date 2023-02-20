import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SignIn.css';
import { SignInApi } from '../../Services/UserService';
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignIn() {
    const [userDetail, setUserDetail] = useState({
        email:"",
        password:""
        })
        
        const takeEmail=(event) =>{
            console.log(event.target.value) 
            setUserDetail(  preState => ({...preState, email:event.target.value})) 
        }
        const takePassword=(event) =>{
            setUserDetail(  preState => ({...preState, password:event.target.value}))
        }

        const[regexObj, setRegexObj] = useState({
            emailBorder:false,
            emailHelper:"",

            passwordBorder:false,
            passwordHelper:""
        })

        const Submit=()=>{
            console.log(userDetail)
            let emailTest=emailRegex.test(userDetail.email)
            let passwordTest=passwordRegex.test(userDetail.password)
            console.log(emailTest)
            console.log(passwordTest)

            if(emailTest===false){
                setRegexObj(preState=>({...preState,emailBorder:true, emailHelper:'Could not find your Gmail Account'}))
            }
            else if(emailTest===true){
                setRegexObj(preState=>({...preState,emailBorder:false, emailHelper:''}))
            }
            if(passwordTest===false){
                setRegexObj(preState=>({...preState,passwordBorder:true, passwordHelper:'Wrong password. Try again'}))
            }
            else if(passwordTest===true){
                setRegexObj(preState=>({...preState,passwordBorder:false, passwordHelper:''}))
            }
            if(emailTest === true && passwordTest === true){
                SignInApi(userDetail)
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
            <form className="FormBody">
                <div className="logo_box">
                    <img width={90} height={30} src="https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-File.png" alt="" />
                </div>
                <div className="signin_box">Sign in</div>
                <div className="user">
                    Use your Google Account
                </div>
                <div className="InputBox">
                    <div >
                        {/* <input className="InputEmail" placeholder="Email or phone" /> */}
                        <TextField 
                        onChange={takeEmail}
                        error={regexObj.emailBorder}
                        helperText={regexObj.emailHelper} 
                        className="InputEmail" id="outlined-basic" label="Email or phone" variant="outlined"/>
                    </div>
                    <div >
                        {/* <input className="InputPassword" placeholder="Password" /> */}
                        <TextField 
                        onChange={takePassword}
                        error={regexObj.passwordBorder}
                        helperText={regexObj.passwordHelper}
                        className="InputPassword" id="outlined-basic" label="Password" variant="outlined"/>
                    </div>
                </div>
                <div className="forgot">
                    <div className="forgotemail">Forgot email?</div>
                    <div className="forgotpassword">Forgot password?</div>
                    </div>
                <div className="bottomtext">
                    <p>Not your computer? Use Guest mode to sign in privately.</p>
                </div>
                <div className="bottomtext2">Learn more.</div>
                <div className="CreateAccountLogin">
                    <a className="CreateAccountLink">Create Account</a>
                    {/* <button className="LoginButton1">Next</button> */}
                    <Button onClick={Submit} className="LoginButton1" variant="contained">Next</Button>               
                </div>
            </form>
            <div className="footer1">
                <select className="language1"> 
                    <option value="English">English (India)</option>
                    <option value="Hindi">हिन्दी</option>
                    <option value="Russian">беларуская</option>
                    <option value="Urdu">ქართული</option>
                </select>
                <div className="footercontent1">
                    Help  &nbsp;  &nbsp;  &nbsp; Privacy &nbsp; &nbsp; &nbsp; Terms
                </div>
            </div>
        </>
    )
}
export default SignIn;