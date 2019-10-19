import React from 'react';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = formErrors => {
    let valid = true;    
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid=false)
    });
    return valid;
}



export class Signup extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            full_name: null,
            e_mail: null,
            pswd: null,
            formErrors: {
                full_name: "",
                e_mail: "",
                pswd: ""
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();

        if(formValid(this.state.formErrors)) {
            console.log(`
                --SUBMITTING-- 
                Full Name: ${this.state.full_name}
                Email: ${this.state.e_mail}
                Password: ${this.state.pswd}
            `)
        }
        else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    }

    handleChange = e => {
        e.preventDefault();

        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
 
        switch(name) {
            case 'full_name': 
                formErrors.full_name = value.length < 6 ? "Minimum 6 characters required" : "";
                break;
                
            case 'e_mail': 
                formErrors.e_mail = emailRegex.test(value) ? "" : "Invalid Email Address";
                break;

            case 'pswd': 
                formErrors.pswd = value.length < 8 ? "Minimum 8 characters required" : "";
                break;        
        
            default:
                break;
        }

        this.setState({formErrors, [name]: value }, () => console.log(this.state));
    }
    
    render() {

        const {formErrors} = this.state;
        return(
            <div>
                <h2>Signup</h2>
                <hr />
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="form-group">
                        <label for="full_name">Full Name:</label>
                        <input type="text" className="form-control" id="full_name" placeholder="Enter Full Name" name="full_name" required noValidate onChange={this.handleChange} />
                        {formErrors.full_name.length > 0 && (
                            <span className="errorMessage">{formErrors.full_name}</span>
                        )}
                    </div>                                
                    <div className="form-group">
                        <label for="e_mail">Email Id:</label>
                        <input type="email" className="form-control" id="e_mail" placeholder="Enter Email ID" name="e_mail" required noValidate onChange={this.handleChange} />
                        {formErrors.e_mail.length > 0 && (
                            <span className="errorMessage">{formErrors.e_mail}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label for="pswd">Password:</label>
                        <input type="password" className="form-control" id="pswd" placeholder="Enter password" name="pswd" required noValidate onChange={this.handleChange} />
                        {formErrors.pswd.length > 0 && (
                            <span className="errorMessage">{formErrors.pswd}</span>
                        )}
                    </div>
                    <button type="submit" className="btn">Sign Up</button>
                </form>
            </div>
        );
    }
}