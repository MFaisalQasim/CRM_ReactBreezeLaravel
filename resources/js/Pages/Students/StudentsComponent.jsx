import React, {Component} from 'react';
import StudentComponent from "./StudentComponent"
import AddStudentComponent from "./AddStudentComponent"
import Coloured from "../../Components/Coloured";

class StudentsComponent extends Component{

    state = {
        students:[{
            id:1,
            name:'Tayyab Iqbal',
            age:24,
            mobile:'03422942591',
            email:'tayyab@123gmail.com',
        },{
            id:2,
            name:'Tayyab Iqbal',
            age:24,
            mobile:'03422942591',
            email:'tayyab@123gmail.com',
        },{
            id:3,
            name:'Tayyab Iqbal',
            age:24,
            mobile:'03422942591',
            email:'tayyab@123gmail.com',
        },],
        
        formVisible:true
    }

    AddStudent=(student)=>{
        student.id = Math.random();
        let students = [...this.state.students,student]
        this.setState({
            students:students,
        })
    }

    handleClose=(e)=>{
        this.setState({
            formVisible:false
        })
    }

    render(){
        return(
            <>
                <button onClick={this.handleClose}>Close</button>
                {this.state.formVisible ? <AddStudentComponent addStudent={this.AddStudent}/>: null }
                <StudentComponent students={this.state.students}/>
            </>
        )
    }
}
export default Coloured(StudentsComponent);