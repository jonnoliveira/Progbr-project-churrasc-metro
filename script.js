// SELETORES
const inputAdultos = document.getElementById('adultos');
const inputCriancas = document.getElementById('criancas');
const inputDuracao = document.getElementById('duracao');
const divResultados = document.getElementById('resultados');
//=====================

calculateAndRender = () => {
  // CALCULATE
  const kilogramsOrLiters = 1000;
  const meatConsuption = inputDuracao.value >= 6 ? 650 : 400; // gramas
  const liquidConsuption = inputDuracao.value >= 6 ? 1500 : 1000; // ml
  const onionConsuption = inputDuracao.value >= 6 ? 150 : 100; // gramas
  const tomatoConsuption = inputDuracao.value >= 6 ? 200 : 300; // gramas
  const peperConsuption = inputDuracao.value >= 6 ? 45 : 38; // gramas
  const riceConsuption = inputDuracao.value >= 6 ? 100 : 80; // gramas

  const foodList = [meatConsuption, liquidConsuption, onionConsuption, tomatoConsuption, peperConsuption, riceConsuption];

  const foodListValues = foodList.map((food) => (
    ((food * inputAdultos.value) + ((food / 2) * inputCriancas.value)) / kilogramsOrLiters
  ));

  // RENDER
  divResultados.innerHTML = (
    `<div id="title">
        <h3>Lista de compras</h3>
      </div>
      <div class="fodd-item">
        <img src="https://cdn-icons-png.flaticon.com/512/933/933310.png" alt="um pedaço de carne em desenho" />
        <p> Quantidade de carne: ${foodListValues[0]} Kg </p>
      </div>
      <div class="fodd-item">
        <img src="https://cdn-icons-png.flaticon.com/512/8806/8806173.png" alt="um copo de bebida em desenho" />
        <p> Quantidade de refrigerante: ${foodListValues[1]} L </p>
      </div>
      <div class="fodd-item">
        <img src="https://cdn-icons-png.flaticon.com/512/4835/4835813.png" alt="uma cebola em desenho" />
        <p> Quantidade de cebola: ${foodListValues[2]} Kg </p>
      </div>  
      <div class="fodd-item">
        <img src="https://cdn-icons-png.flaticon.com/512/1413/1413626.png" alt="um tomate em desenho" />
        <p> Quantidade de tomate: ${foodListValues[3]} Kg </p>
      </div>
       <div class="fodd-item">
        <img src="https://cdn-icons-png.flaticon.com/512/883/883661.png" alt="um pimentão em desenho" />
        <p> Quantidade de pimentão: ${foodListValues[4]} Kg </p>
      </div>
      <div class="fodd-item">
        <img src="https://cdn-icons-png.flaticon.com/512/2714/2714043.png" alt="uma tigela de arroz em desenho" />
        <p> Quantidade de arroz: ${foodListValues[5]} Kg </p>
      </div>`
  )
}