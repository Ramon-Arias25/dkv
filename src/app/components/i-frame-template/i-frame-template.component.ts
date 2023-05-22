import { Component, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-i-frame-template',
  templateUrl: './i-frame-template.component.html',
  styleUrls: ['./i-frame-template.component.css']
})
export class IFrameTemplateComponent{
  
  numero!: number;

  iframeUrl = [
  /*0  */ '',//0 para limpiar dememoria 
  /*1  */ 'https://bit.inteliens.com/login',//PRICING Y COBERTURAS
  /*2  */ 'https://dkvseguros.inteliens.com/',//ARGUMENTARIOS
  /*3  */ 'https://www.plimsoll.es/',//INFORME SECTORIAL CORREDURIAS
  /*4  */ 'https://dkvseguros.sharepoint.com/:f:/r/sites/InvestigacinComercial83/Repositorio%20de%20estudios/Noticias%20Sectoriales?csf=1&web=1&e=ZRaKyc',//NOTICIAS SECTORIALES
  /*5  */ 'https://app.powerbi.com/reportEmbed?reportId=ffcdecfa-13c1-4c05-8428-670c04682ed1&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//por que llega
  /*6  */ 'https://app.powerbi.com/reportEmbed?reportId=90f9e1a2-1d60-48dc-9748-51d65704eed9&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//como es
  /*7  */ 'https://app.powerbi.com/reportEmbed?reportId=f7507751-6712-430c-bb44-02470d31bc6f&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//como actua
  /*8  */ 'https://app.powerbi.com/reportEmbed?reportId=89f49aa4-8d37-48e5-a2da-b6016e252a0b&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//donde vive
  /*9  */ 'https://app.powerbi.com/reportEmbed?reportId=a549b35c-bd59-4c44-98c8-8830dbe43e5c&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//que le motiva
  /*10 */ 'https://app.powerbi.com/reportEmbed?reportId=25b9ebf8-8293-40f9-b404-1c21a3ab606d&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//por que se va
  /*11 */ 'https://app.powerbi.com/reportEmbed?reportId=b5955202-f67d-4004-9d52-319edaab4904&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//cuadro de mando
  /*12 */ 'https://app.powerbi.com/reportEmbed?reportId=d3f496c2-9db7-4f53-b688-bc79b913d9bb&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//estudio de bajas
  /*13 */ 'https://app.powerbi.com/reportEmbed?reportId=1be6869d-1259-4ce0-81ff-58a07bca0fd0&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//campanias de marketing
  /*14 */ 'https://app.powerbi.com/reportEmbed?reportId=d30a1849-2bf2-478b-bd9f-e487fce301a0&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//dimensionamiento acciones 
  /*15 */ 'https://informa.inatlas.com/#/home',//geomarketing empresas
  /*16 */ 'https://dkvseguros.sharepoint.com/:f:/r/sites/InvestigacinComercial83/Repositorio%20de%20estudios/Repositorio%20de%20Estudios?csf=1&web=1&e=bwU7za',//geomarketing empresas
    ];

  iframeTitulo = [
    '',//0 para limpiar dememoria 
    'PRICING Y COBERTURAS',
    'ARGUMENTARIOS',
    'INFORME SECTORIAL CORREDURIAS',
    'NOTICIAS SECTORIALES',
    'Por qué llega',
    'Cómo es',
    'Cómo actúa',
    'Dónde vive',
    'Qué le motiva',
    'Por qué se va',
    'Cuadro de mando',
    'Estudio de bajas',
    'Campañas de marketing',
    'Dimensionamiento acciones comerciales',
    'Geomarketing empresas'
  ];

  ngOnInit() {
    // this.numero = this.route.snapshot.paramMap.get('numero');
    if (this.route) {
      const num = this.route.snapshot.paramMap.get('numero');
      if (num !== null) {
        this.numero = +num;
      }
    }    
  }
  
  constructor(
    private sanitizer: DomSanitizer, 
    private route: ActivatedRoute,
    private location: Location
  ) { }


  getIframeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeUrl[this.numero]);
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.numero = 0;
  }
}
