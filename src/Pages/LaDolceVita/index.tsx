import Header from "../../Components/Header";
import PlatesList from "../../Components/PlatesList";
import Presentation from "../../Components/Presentation";

import { Restaurants } from "../Home";
import LadDolceImage from "../../assets/images/italian_background.png";

const LaDolceVita = () => (
  <>
    <Header />
    <Presentation
      categoria={Restaurants[3].categoria}
      nome={Restaurants[3].nome}
      imagem={LadDolceImage}
    />
    <PlatesList />
  </>
);

export default LaDolceVita;
