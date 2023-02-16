import React from 'react';
import './SignUp.css';
function SignUp(){
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
                            <input className="inputfirstname" placeholder="First Name" />
                        </div>
                        <div>
                            <input className="inputlastname" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="email">
                        <input className="inputemail" placeholder="Username" />
                    </div>
                    <div className="message">
                        You can use letters, numbers & periods
                    </div>
                    <div className="middlemessge">
                        Use my current email address instead
                    </div>
                    <div className="passwordbox">
                        <div>
                            <input className="password" placeholder="Password" />
                        </div>
                        <div>
                            <input className="confirm" placeholder="Confirm" />
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
                            <button className="LoginButton">Next</button>
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