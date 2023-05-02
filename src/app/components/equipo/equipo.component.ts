import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent {

    items = [`
    <div class="equipo-ul" style="display: flex; align-items: center; margin: auto;" >
      <img src="../../../assets/Elipse 30.png" alt="jesusArmada">
      <div class="wrap-equipo-item" style="display: flex; flex-direction: column; align-items: flex-start; margin-left: 50px;">
          <p class="unnamed-character-style-5">JESÚS ARANDA</p>
          <p class="unnamed-character-style-2">COORDINADOR</p>
          <p class="unnamed-character-style-17">
              <br /><br /> 
              Graduado en Estadística por la Universidad de Granada y Master en Marketing Science en ESIC (Business and Marketing School), Jesús acumula experiencia de más de quince años en el Sector de Investigación de Mercados y, ha contribuido, a lo largo de su trayectoria, en el desarrollo de empresas con diferente actividad económica ocupando distintas posiciones (Banca, Institutos de Investigación de Mercados, Logística, Energía, Gran Consumo...). 
              <br /><br /> 
              Desde Febrero de 2018 forma parte del Equipo de Marketing de DKV coordinando la Actividad de Investigación Mercados e Inteligencia Comercial. Así mismo compagina esta actividad con el mundo académico, es profesor en la OBS (IL3-Universitat de Barcelona-EAE On Line).
          </p>
      </div>
    </div>`,`
    <div class="equipo-ul" id="borjaMesolowski">
    <!-- <div class="avatar" id="uno"></div> -->
    <img src="../../../assets/Borja Wesolowski.png" alt="borjaMesolowski">
    <div class="wrap-equipo-item">
        <p class="unnamed-character-style-5">BORJA WESOLOWSKI</p>
        <p class="unnamed-character-style-2">MERCADO Y COMPETENCIA</p>
        <p class="unnamed-character-style-17">
            <br /><br /> 
            Estudió Marketing en Saxion University (Países Bajos) y Máster en Marketing y Comunicación Digital (Kühnel Escuela de Negocios). Comenzó su trayectoria profesional en el sector de los eventos fundando su propia compañía.
            <br /><br /> 
            Se incorporó a DKV en el año 2017 dentro área de Estrategia en el departamento de Marketing, para incorporarse posteriormente al área de Investigación de Mercados e Inteligencia Comercial desempeñando las funciones de investigación en todo lo relativo al mercado y a la competencia.
        </p>
    </div>
    </div>`,`
    <div class="equipo-ul" id="cristianMatos">
    <!-- <div class="avatar" id="uno"></div> -->
    <img src="../../../assets/CRISTIAN MARTOS.png" alt="cristianMatos">
    <div class="wrap-equipo-item">
        <p class="unnamed-character-style-5">CRISTIAN MARTOS</p>
        <!-- <p class="unnamed-character-style-2">COORDINADOR</p> -->
        <p class="unnamed-character-style-17">
            <br /><br /> 
            Graduado en Estadística y Empresa por la universidad Carlos III de Madrid. Comenzó su trayectoria profesional en el sector de distribución, como analista de datos, especializándose principalmente en el negocio de tabaco durante 7 años.
            <br /><br /> 
            Se incorporó a DKV en 2022 para formar parte del área de Investigación de Mercados e Inteligencia Comercial, dentro del departamento de Marketing.
        </p>
    </div>
  </div>`,`
  <div class="equipo-ul" id="sergioCuesta">
    <!-- <div class="avatar" id="uno"></div> -->
    <img src="../../../assets/SERGIO CUESTA.png" alt="sergioCuesta">
    <div class="wrap-equipo-item">
        <p class="unnamed-character-style-5">SERGIO CUESTA</p>
        <!-- <p class="unnamed-character-style-2">COORDINADOR</p> -->
        <p class="unnamed-character-style-17">
            <br /><br /> 
            Graduado en Ingeniería de Software por la Universidad de Tecnología y Arte Digital (U-TAD) y Master en Big Data y Data Science por la misma Universidad.
            <br /><br /> 
            Sergio acumula dos años de experienca como desarrollador de software en una compañía que se dedica a crear películas de animación (Planet 51, Mortadelo y Filemón, Blush, Good Luck Bad Luck, etc..) y, va a hacer un año de experiencia como Ingeniero de Datos.
            <br><br>
            Se incorporó en calidad de externo en julio de 2022 y en febrero de 2023 pasó a formar parte de la plantilla de la compañía como parte del equipo de investigación de Mercados e Inteligencia Comercial, desempeñando las funciones de ingeniero de datos y de investigación comercial.
        </p>
    </div>
  </div>`];
    constructor() {

    }
    currentIndex = 0;
  
    setCurrentIndex(index: number) {
      this.currentIndex = (index + 1) % this.items.length;
    }

}
