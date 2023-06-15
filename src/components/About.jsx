import React from "react";
import AnimatedPage from "./AnimatedPage";
import "./about.style.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import Swiper from "./SwiperCarus";

function About(props) {
  return (
    <AnimatedPage>
    <div className="about">
      <div className="aboutContainer">
        <h2 className="aboutTitle">Můj příběh</h2>
        <p className="aboutDescription">
    Jmenuji se Barbora a nabízím Vám své služby Copywritera.
    Copywriting mě zaujal před pár lety, a stále mu věnuji spoustu svého volného času, který mi zůstane po příchodu domů ze zaměstnání. 
Z velké části mými klienty byli majitelé webů, kterým jsem pomáhala s obsahem do sekcí, popisem produktů, či korekturou. Psala jsem na web zaměřený na prodej přírodní kosmetiky, kde jsem se zabývala texty pro parfémy. Tvořila jsem také obsah start-up projektu či dělala korekturu propagačnímu webu restaurací. Často se jednalo o klienty, kterým jsem pomáhala najít tu správnou myšlenku, k vyjádření jejich představ. Kterou jsem nakonec mohla přetvořik ve výsledek se kterým mohli být spokojeni. </p>
<p className="aboutDescription"> 
Copywriting je něčím, pro co se dokáži nadchnout a v čem bych se nadále ráda zdokonalovala.
Věnuji se mu při zaměstnání, však od května, jsem si řekla, že už ho nechci odsouvat na druhou kolej a stane se mou hlavní prioritou.
</p><p className="aboutDescription">
Pokud jsem Vás zaujala, určitě mě neváhejte kontaktovat. 
Ať buď by jste chtěli pomoc s jednou stranou a nebo hledáte novou kolegyni do vašeho podnikání na dlouhodobou spolupráci.

Určitě jsem ráda za nové výzvy, nové zkušenosti, nové příležitosti. Při možnosti dlouhodobé spolupráce. Se nebráním se vypracování zkušebního projektu, aby jsme se navzájem lépe poznali. Vy mě a mé texty. Já Vás a Váš sen který Vám ráda pomohu vylepšit.
</p>
<div className="priceContact">
<div className="price">
<h2>Cena služeb</h2>
              <p>Hodinová sazba: 500 kč</p>
              <p>Úprava jedné normostrany: 250 kč</p></div>
<div className="contact">

              <h2 className="contactH2"> Kontaktujte mě</h2> 
              <span>
                <FaFacebookF className="icons" />
                <a href="https://www.facebook.com/barca.tomeckova" target="_blank">
                  barca.tomeckova
                </a>
              </span><br/>
              <span>
                <BsFillTelephoneFill className="icons" /><a href="tel:+720737600813">+720 737 600 813</a>
              </span>
             <br/>
              <span>
                <MdEmail className="icons" />
                <a href="barbora-tomeckova@seznam.cz">barbora-tomeckova@seznam.cz</a>
              </span>
            </div>

</div>

      </div>
    <div className="sectionTwo">
              <Swiper />
            </div>
    </div>
    </AnimatedPage>
  );
}

export default About;
