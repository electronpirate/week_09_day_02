import React from 'react';
import './App.css';
import CustomersList from './components/CustomersList';
import { connect } from 'react-redux';


class App extends React.Component {
  render() {
    return(
    <div className="App">
      <CustomersList />
    </div>
  );
}

componentDidMount(){
    this.props.getData();
  }

}




const mapDispatchToProps = (dispatch) => {
  return{
  getData(){
    dispatch(() => {
      fetch('http://localhost:3000/api/customers')
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch({
          type: 'GET_DATA',
          data: data
        });
      });
    })
  }
}
}

export default connect(null, mapDispatchToProps)(App);
