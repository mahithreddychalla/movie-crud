import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {requestApiData} from "../actions";

const mapStateToProps = state => {
    console.log('STATES', state);
  return { artdata:state.art};
};
  
class ConnectedList extends Component {
    constructor(props) {
      super(props);
    }
    render(){
        console.log('lists', this.props);
        return (
            
              
            <div>
            <div className="container">
                <div className="row">
                    <table className="table table-bordered">
                        <thead className="thead-light">
                        
                            <tr>
                            
                                <th scope="col">name</th>
                                <th scope="col">ReleaseDate</th>
                                <th scope="col">Oscar</th>
                                <th scope="col">Rating</th>
                                {/* <th scope="col">Description</th>,,,,,,,,,,,, key={customer.id} */}
                                
                            </tr>
                        </thead>
                        <tbody>
                            
                                <tr>
                                <td>{this.props.artdata.Name}</td>
                                    <td>{this.props.artdata.ReleaseDate}</td>
                                    <td>{this.props.artdata.Oscar}</td>
                                    <td>{this.props.artdata.Rating}</td>
                                    {/* <td>{customer.description}</td> */}
                                    <td>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group" style={{ marginBottom: "20px" }}>
                                                {/* <Link to={`edituser/${customer.id}`} className="btn btn-sm btn-outline-secondary">Edituser </Link> */}
                                                {/* <button className="btn btn-sm btn-outline-secondary" onClick={() => this.deleteCustomer(customer.id)}>Delete Customer</button> */}
                                                <button onClick={this.Changebutton}>Edituser</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        );
    }
}

export default connect(mapStateToProps,null)(ConnectedList);

