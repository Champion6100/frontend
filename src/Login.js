import React from 'react';
import { LoginSignup } from './LoginSignup';

export class Login extends React.Component {
    constructor(props){
        super(props);
        this.state= {isLoggedIn: false,
            authValidate: false
        };

        this.logout = this.logout.bind(this);
    }
    
    logout(){
        this.setState({authValidate: !this.state.authValidate, isLoggedIn:false});
    }

    render() {
        console.log("authValidate", this.state.authValidate);
        console.log("login",this.state.isLoggedIn);
        return(
            (!this.state.authValidate)?(
                <div>
                    <h2>Login</h2>
                    <hr />
                    <form>
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required />
                            <div id="validate_name"></div>
                        </div>
                        <div className="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" required/>
                        </div>
                        <button type="submit" className="btn" onClick={this.logout}>Login</button>
                    </form>
                </div>
            ):(
                <div>
                    <h2>You Successfully Logged In!!!</h2>
                    <button onClick={this.logout} className="btn">Logout</button>
                    {/* <LoginSignup handleLogin={this.state.isLoggedIn}/> */}
                </div>
            )
        );
    }
}