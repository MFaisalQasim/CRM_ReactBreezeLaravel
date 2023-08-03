import React, {Component} from 'react';
import Coloured from "../../Components/Coloured";

class StudentComponent extends Component{

    render(){
        const students = this.props.students;
        
        const studentList = students.map(student=>{
            return(
                <>
                    <div key={student.id}>
                        <h1><b> Student {student.id}</b></h1>
                        <p>Name : {student.name}</p>
                        <p>Age  : {student.age}</p>
                        <p>Mobile : {student.mobile}</p>
                        <p>Email : {student.email}</p> 
                    <br />
                    <hr />
                    <br />
                    </div>
                </>
            )
        });

        return(
            <>
                <div>
                    <h1><b>Students</b></h1>
                    <br />
                    <p>{studentList}</p>
                </div>
            </>
        )
    }
}
export default  Coloured(StudentComponent);