import React, {Component} from 'react';

export default class NewPostComponent extends Component{
    
    state={
        name:'Faisal',
        age:24,
        mobile:'03422942591',
        skills:['Laravel ',' React ',' Sql ',' Firebase']
    }

    handleClick=(e)=>{
        console.log("Button Is Click");
    }

    handleMouseOver=(e)=>{
        console.log(e.target, e.pageX, e.pageY);
    }

    handleClick=(e)=>{
        console.log('Paragraph has been copied!')
    }

    handleChangeState=()=>{        
        alert('handleChangeState');
        this.setState({
            name:'Muhammad Faisal Qasim ',
            age:24,
            mobile:'03422942591',
            skills:[' Php ', ' Laravel ',' React ',' PhpMyAdminSql ', ' MySql ',' Firebase ']
        });
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
        console.log('Skills :', this.state.skills['']); 
    }

    render(){
        return(
            <div>
                <h1>New Post Component</h1>
                <p>Name : {this.state.name}</p>
                <p>Age  : {this.state.age}</p>
                <p>Mobile : {this.state.mobile}</p>
                <p>Skills : {this.state.skills.join(',')}</p>

                {/* handleClick handleMouseOver Functionalities */}
                <button type="button" onClick={this.handleClick} onMouseOver={this.handleMouseOver}>Click Here</button>

                {/* handleClick Copy Para */}
                <p onCopy={this.handleClick}>This is Paragraph to be Copy</p>

                {/* handleChangeState */}
                <button type="button" onClick={this.handleChangeState} >Change State</button>

                <form onSubmit={this.handleSubmit}>
                    Name : <input type="text" name='name' onChange={this.handleChange} /> <br />
                    Age : <input type="text" name='age' onChange={this.handleChange} /> <br />
                    Mobile : <input type="text" name='mobile' onChange={this.handleChange} /> <br />
                    Skills : <input type="text" name='skills[0]' onChange={this.handleChange} /> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}