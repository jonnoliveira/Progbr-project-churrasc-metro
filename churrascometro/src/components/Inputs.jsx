import React, { Component } from 'react'

export default class Inputs extends Component {
state = {
  adultos: '',
  criancas: '',
  duracao: '',
  click: false,
  totalMeat: '',
  totalLiquid: '',
}

onInputChange = ({ target }) => {
  const { name } = target;
  const value = target.type === 'checkbox'
    ? target.checked
    : target.value

    this.setState({ [name]: value })
}



calculateQuantities = () => {
  const { adultos, criancas, duracao } = this.state;
  const averageConsuption = duracao >= 6 ? 650 : 400; // gramas
  const kilogramsOrLiters = 1000;
  const averageLiquidConsuption = duracao >= 6 ? 1500 : 1000; // ml

  const totalMeat = (averageConsuption * adultos + ((averageConsuption/2) * criancas))/kilogramsOrLiters;
  const totalLiquid = (averageLiquidConsuption * adultos + (( averageLiquidConsuption/2) * criancas))/kilogramsOrLiters;

  this.setState({
    click: true,
    totalMeat,
    totalLiquid,
  })
}

  render() {
    const { click, totalMeat, totalLiquid } = this.state;
    return (
      <div className="container">
        <div className="inputs">
          <input type="number" name="adultos" id="adultos" placeholder="Quantos adultos?" onChange={ this.onInputChange } />
          <input type="number" name="criancas" id="criancas" placeholder="Quantas crianças?" onChange={ this.onInputChange } />
          <input type="number" name="duracao" id="duracao" placeholder="Qual a duração (h)?" onChange={ this.onInputChange } />
          <button type="button" onClick={ this.calculateQuantities }>Calcular</button>
        </div>
        { click &&
        <div className="resultados">
          <h3>Consumo total:</h3>
            <div>
              <p> Carne: { totalMeat } kg</p>
            </div>
            <div>
              <p> Refrigerante: { totalLiquid } L </p>
            </div>
      </div>
        }
      </div>
    )
  }
}
