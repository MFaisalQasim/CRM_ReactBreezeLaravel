import React, {Component} from 'react';
import stutent from "../../../images/stutent.jpg"
class AddStudentComponent extends Component{

    state={
        name:null,
        age:null,
        mobile:null,
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Name :', this.state.name);
        console.log('Age  :', this.state.age);
        console.log('Mobile :', this.state.mobile);
        this.props.addStudent(this.state);
    }

    componentDidMount(){
        console.log("Component Did Mount");
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
            console.log("Component Will Unmount");
    }

    render(){
        return(
            <>
            <h1>Add New Student</h1>
            <img src={stutent} width={500} alt="stutent" srcset="https://www.shutterstock.com/image-photo/portrait-cheerful-male-international-indian-600w-2071252046.jpg" />
            {/* <img src={process.env.APP_URL + "/stutent.jpg"} width={500} alt="stutent" srcset="" /> */}
            <form onSubmit={this.handleSubmit}>
                Name : <input type="text" name='name' onChange={this.handleChange} /> <br />
                Age : <input type="text" name='age' onChange={this.handleChange} /> <br />
                Mobile : <input type="text" name='mobile' onChange={this.handleChange} /> <br />
                <button type="submit">Submit</button>
            </form>
            </>
        )
    }
}

export default (AddStudentComponent);