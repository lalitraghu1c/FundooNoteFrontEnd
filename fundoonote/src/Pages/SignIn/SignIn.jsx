import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SignIn.css';
function SignIn() {
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
                        <TextField className="InputEmail" id="outlined-basic" label="Email or phone" variant="outlined"/>
                    </div>
                    <div >
                        {/* <input className="InputPassword" placeholder="Password" /> */}
                        <TextField className="InputPassword" id="outlined-basic" label="Password" variant="outlined"/>
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
                    <button className="LoginButton1" variant="contained">Next</button>
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