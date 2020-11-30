import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {reciveInputData} from "../actions";
const mapDispatchToProps = dispatch => bindActionCreators({reciveInputData}, dispatch);
 class Input extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
              Name:'',
              ReleaseDate:'',
              Oscar:'',
              Rating:''
            

         }
         
     }
     changeHandler=(event)=>{
         this.setState({[event.target.name]:event.target.value})
     }
     Changebutton=(event)=>{
         event.preventDefault();
         const data={
            Name:this.state.Name,
            ReleaseDate:this.state.ReleaseDate,
            Oscar:this.state.Oscar,
            Rating:this.state.Rating
        }
        this.props.reciveInputData(data)
  
     }
    render() {
        return (
            <div>
                 {/* <input onChange={this.ChangeHandler} name='Amount' type='number'></input>
                 <br/>  <br/>
                 <button onClick={this.Changebutton}>Enter Amount</button>
                 <h1>{this.props.artdata.Amount}</h1> */}
                 <form onSubmit={this.handleSubmit}>
            <div >
              <label>Name:</label>
              <input type="text" className="form-control" onChange={this.changeHandler}  name="Name" autoComplete="off"  />
              {/* <div className="error" *ngif="loginForm.controls['username'].hasError('required') && loginForm.controls['username'].touched">Username is required</div> */}
            </div>
            <div className="form-group">
              <label> ReleaseDate:</label>
              <input type="number" className="form-control" onChange={this.changeHandler}  name="ReleaseDate" autoComplete="off" />
              
            </div>
            <div className="form-group">
              <label >Oscar:</label>
              <input type="text" className="form-control" onChange={this.changeHandler}  name="Oscar" autoComplete="off" />
              
            </div>
            <div className="form-group">
              <label >Rating:</label>
              <input type="number" className="form-control" onChange={this.changeHandler}  name="Rating" autoComplete="off" />
              
            </div>
            
            {/* <button className="btn btn-link" disabled={this.state.email === '' || this.state.password === ''}>Save</button> */}
           {/* <Link to='/MovieUpdate'><button onsubmit className="btn btn-link">Save</button></Link>  */}
           <button onClick={this.Changebutton}>Save</button>
          </form>
            </div>
        )
    }
}
export default connect(null, mapDispatchToProps)(Input)