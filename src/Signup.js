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
            contact_no: null,
            e_mail: null,
            pswd: null,
            formErrors: {
                full_name: "",
                contact_no: "",
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
                Contact Number: ${this.state.contact_no}
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

            case 'contact_no':
                formErrors.contact_no = value.length < 10 ? "Minimum 10 numbers required" : "";
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
                        <label for="contact_no">Contact Number:</label>
                        <input type="text" className="form-control" id="contact_no" placeholder="Enter Contact Number" name="contact_no" required noValidate onChange={this.handleChange} />
                        {formErrors.contact_no.length > 0 && (
                            <span className="errorMessage">{formErrors.contact_no}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label for="addr1">Address Line-1:</label>
                        <input type="text" className="form-control" id="addr1" placeholder="Enter Address Line 1" name="addr1" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="addr2">Address Line-2:</label>
                        <input type="text" className="form-control" id="addr2" placeholder="Enter Address Line 2" name="addr2" onChange={this.handleChange} />
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