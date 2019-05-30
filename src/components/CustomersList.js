import React from 'react';
import { connect } from 'react-redux';

const CustomersList = (props) => {

  const customerCase = props.customerData.map((customer, index) => {
    return <li key={index}>{customer.first_name}</li>
  })

    return(
    <div>
    <h1>Customers</h1>
    <ol>{customerCase}</ol>
    </div>
  )
}






const mapStateToProps = (state) => {
  return{
    customerData: state
  }
}



export default connect(mapStateToProps)(CustomersList);
