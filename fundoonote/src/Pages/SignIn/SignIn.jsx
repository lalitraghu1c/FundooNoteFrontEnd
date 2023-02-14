import './SignIn.css';
function SignIn() {
    return (
        <>
            <form className="FormBody">
                <div className="logo">
                    <img width={90} height={30} src="https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-File.png" alt="" />
                </div>
                <div className="signin">Sign in</div>
                <div className="user">
                    Use your Google Account
                </div>
                 <div className="InputBox">
                    <div >
                        <input className="InputEmail" placeholder="Email or phone" />
                    </div>
                    <div >
                        <input className="InputPassword" placeholder="Password" />
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
                    <button className="LoginButton">Next</button>
                </div>
            </form>
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
        </>
    )
}
export default SignIn;