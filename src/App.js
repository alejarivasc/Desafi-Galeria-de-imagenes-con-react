import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="Galería de Imágenes con React." />
      <hr></hr>
      <div className="d-flex gap-3 justify-content-evenly flex-wrap">
        <Cards
          cardImg="https://pixabay.com/get/g53320001e002356cd26298fdca89b388cd25165a142d22dc545bb4e3ebe0b18ba0c422421ab33d0181fb741125a4f704633fbf3a148caaaed586bbfe3c171a25e09cd36ea86911e7797fb7b567ea679a_640.jpg"
          cardTitle="Muralla China"
          cardText="La Muralla China es un muro fortificado que se construyó alrededor de China, a fin de proteger al imperio de posibles invasores."
        />
        <Cards
          cardImg="https://pixabay.com/get/g6d68d0aef3675458a30116ef6441473b0ac84f46da3236a31f9911d7299afb55b0af8cea1d042b08e2edb343fe8b56753af96d188ff24dd86e643be9edf132bf85e8d46946ab09eb713efa9bc577829d_640.jpg"
          cardTitle="Estatua de Cristo Redentor"
          cardText="La Estatua de Cristo Redentor se encuentra en la punta del monte Corcovado en la ciudad de Río de Janeiro en Brasil, tiene 30 metros de altura, y se erige sobre una base de 8 metros."
        />
        <Cards
          cardImg="https://pixabay.com/get/g0d29dd1495787cdfb7b78efc4a22b43eee6cc48b080b790ffb1d8c82019161e767ef24f4f62c8642d630ad0c8bf3b1040e5cb7eb9cd031bdd8c893e76019dde7c5d34c205787b4a75785934ee06a893b_640.jpg"
          cardTitle="Machu Picchu"
          cardText="Las ruinas de la ciudad de Machu Picchu, en Perú, están construidas en la cima de una montaña sagrada."
        />
        <Cards
          cardImg="https://pixabay.com/get/g33c27be7b1212a543c06498ec7560f2ea0907bd87260a37d515e82aea2b89f7113ade8246ac78b7f4c8350c38868c79e9a5a755814c131047c65996699bbec5116af8def9d19308569bdb15db8958039_640.jpg"
          cardTitle="Ciudad de Petra"
          cardText="Petra es una antigua ciudad en la actual Jordania. Se ubica entre el mar negro y el Golfo de Aqaba. Recibe ese nombre por estar construida en piedra."
        />
        <Cards
          cardImg="https://pixabay.com/get/g7530e48f44ee9f35517a5099ef7c0e8555822d05292b736448783ec00a45fbddd095ce3896503aaadf39e852b9ee4ebd4fa4ca3714d8e7003f554c237cba72c15b597d216c31ee27c55ad77fdaf7cf82_640.jpg"
          cardTitle="Taj Mahal"
          cardText="El Tal Mahal es un mausoleo construido en el siglo XVII por el emperador Shah Jahan para honrar a su esposa predilecta, Arjumand Banu Begum, conocida también como Mumtaz Mahal. Se encuentra en Agra, la India, al lado del río Yamuna."
        />
        <Cards
          cardImg="https://pixabay.com/get/g185d9350d68ed57babc6f130343848a40f7ce806e4f59bc89d9061a537cbe029c3badbdd8df2f2f71bc1de4b9ce0ffe58116de3f118ccdedbf629f199e0e10e758c7b87f3ffa6853de40d30b79c0bda3_640.jpg"
          cardTitle="El Coliseo romano"
          cardText="Ubicado en Italia. Se trata de un anfiteatro de planta ovalada con fines de entretenimiento masivo, y tiene una capacidad para albergar hasta casi 65.000 mil espectadores."
        />
        <Cards
          cardImg="https://pixabay.com/get/g924bd63d22390920b942e23981d01fd5244c76744dea36e749cbfbfebf9c5a650aeec748443ecca7c2c9a2ac91c167476a0d0315fcc5ec42add7761d224747e2023330b92a2e7be8f00182db2db248f0_640.jpg"
          cardTitle="Chichén Itzá"
          cardText="El complejo urbano de la ciudad Chichén Itzá está ubicado en la península de Yucatán, México, y se encuentra emplazado sobre cinco cenotes (fuentes subterráneas de agua) que abastecían de agua a la población maya."
        />
      </div>
      <hr></hr>
      <Footer
        text="Ver más en"
        link="https://www.elmundo.es/como/2022/06/22/62b32d26e4d4d8c6368b45b8.html"
        description="Las siete maravillas del mundo"
      />
    </>
  );
}

export default App;
