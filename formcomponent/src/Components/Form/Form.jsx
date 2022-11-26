import React, { Component } from 'react'
import './Form.css'
class Personal extends Component {
    state = {name:'',email:'',surname:'',phone:'', comment:'', active:''}
    clickName = (e) =>{
        this.setState({name:e.target.value})
    }
    clickEmail = (e) =>{
        this.setState({email:e.target.value})
    }
    clickSurname = (e) =>{
        this.setState({surname:e.target.value})
    }
    clickPhone = (e) =>{
        this.setState({phone:e.target.value})
    }
    clickComment = (e) =>{
        this.setState({comment:e.target.value})
    }
    clickBtn = (e) =>{
        this.setState( this.state.phone.length<8 || this.state.name==='' || this.state.surname==='' || this.state.comment==='' || this.state.email ===''? alert('Fill inputs'):alert('Well done'))
    }
  render() {
    return (
        <div className='display'>
             <div className='container' >
        
        <img src='https://imgs.search.brave.com/iA4XVY2CWNgE-7o4_9HqfH8EkXJNL-X7px1C5KIONtM/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9zdHVk/ZW50aGVhbHRoLm1z/dC5lZHUvbWVkaWEv/c3R1ZGVudHN1cHBv/cnQvc3R1ZGVudGhl/YWx0aC9pbWFnZXMv/bmV3cGljcy9mb3Jt/cy5wbmc'></img>
        
      <div className='inputs'><h1>Personal</h1> <input value={this.state.name} onChange={this.clickName} type='text' placeholder='Name' name='name'></input>
      <br></br>
      <p style={{display:'none'}} className='active' value={this.state.active}></p>
      <input value={this.state.email} onChange={this.clickEmail} type='text' placeholder='EMAIL' required name='email'></input>
      <br></br>
      <input value={this.state.surname} onChange={this.clickSurname} type='text' placeholder='SURNAME' name='surname'></input>
      <br></br>
      <input value={this.state.phone} onChange={this.clickPhone} type='number' placeholder='PHONENUMBER' name='phone'></input>
      <br></br>
      <input value={this.state.comment} onChange={this.clickComment} type='text ' placeholder='COMMENT' name='comment'></input>
      <br></br>      <button type='button' value={this.state.button} className='btn' name='clickbtn' disabled={this.state.active} onClick={this.clickBtn}>Submit</button>
</div>
     <br></br>
      </div>
        </div>
     
    )
   
  }
}
export default Personal