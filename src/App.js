import React, { Component } from 'react';
import Form from './Form.js';
import Style from './style.css';
import logo from './logo.svg';
import axios from "axios";
import './App.css';

class App extends Component {
  state = {
    countries: [],
    visitors: []
  }
  componentDidMount() {
    this.getCountries();
  }
  getCountries() {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all"
      )
      .then(response => {
        this.setState({
          countries: response.data
        });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleFormSubmit(data) {
    this.setState({ visitors: this.state.visitors.concat([data]) })
    console.log(data)
  }
  handleClearButton() {
    this.setState({ visitors: [] });
  }
  render() {
    return (

      <div>
        <Form
          countries={this.state.countries}
          handleFormSubmit={(data) => this.handleFormSubmit(data)}
          visitors={this.state.visitors}
          clearButton={() => this.handleClearButton()}
        />
        <div className="column2">

          <div>
            <h3>Visitantes anteriores</h3>
          </div>
          <div className="visitor-box">
            <div>
              {this.state.visitors.map(visitor => <p>{visitor.formName} - {visitor.countrySelection} - {visitor.birthDate}</p>)}</div>
          </div>
        </div>


      </div>

    );
  }
}

export default App;
