import React, { Component } from 'react';
import Style from './style.css';

class Form extends Component {
    state = {
        formName: '',
        birthDate: '',
        countrySelection: 'Argentina',
    }
    handleOnchangeInputName(event) {
        this.setState({ formName: event.target.value });
        console.log(event.target.value);
    }
    handleOnchangeBirthDate(event) {
        this.setState({ birthDate: event.target.value });
        console.log(event.target.value)
    }
    handleCountrySelection(event) {
        this.setState({ countrySelection: event.target.value });
        console.log(event.target.value)
    }
    render() {
        return (

            <div>
                <div>
                    <h1 style={{ textAlign: "center" }}>Ejercicio Intive</h1>
                </div>
                <div>
                    <p style={{ textAlign: "center" }}>Nombre: {this.state.formName}</p>
                </div>
                <div className="column1">

                    <p>Nombre</p>
                    <input type="text" placeholder="Nombre" value={this.state.formName} onChange={(event) => this.handleOnchangeInputName(event)} />
                    <p>Pais</p>
                    <select name="Paises" id="select-paises" onChange={(event) => this.handleCountrySelection(event)} value={this.state.countrySelection}>
                        {this.props.countries.map(country => {
                            return (
                                <option value={country.name}>{country.name}</option>
                            )
                        })}

                    </select>
                    <p>Edad</p>
                    <input type="date" placeholder="dd/mm/aaaa" value={this.state.birthDate} onChange={(event) => this.handleOnchangeBirthDate(event)} />
                    <div>
                        <button id="button" onClick={() => this.props.handleFormSubmit(this.state)}>Saludar</button>
                        <button id="button" onClick={() => this.props.clearButton()}>Clear list</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Form;