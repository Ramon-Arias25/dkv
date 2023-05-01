import { Component } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent {
  constructor() { }

  handleHover(id: string) {
    document.querySelectorAll(`#${id}`).forEach((sibling) => {
      (sibling as HTMLElement).style.backgroundSize = '220%';
      (sibling as HTMLElement).style.transition ='background-size 0.3s ease-in-out';
    });
    
    document.querySelectorAll(`#base-flecha-${id},#punta-flecha-${id}`).forEach((flechaSibling) => {
      (flechaSibling as HTMLElement).style.borderTop ='solid 15px var(--unnamed-color-98a92a)';
      (flechaSibling as HTMLElement).style.transition ='border-top 0.3s ease-out';
    });

    document.querySelectorAll(`#selector-punto-${id}`).forEach((selectorPuntoSibling) => {
      (selectorPuntoSibling as HTMLElement).style.opacity ='1';
      (selectorPuntoSibling as HTMLElement).style.transition ='opacity 0.3s ease-out';
    });
  }

  handleMouseLeave(id: string) {

    document.querySelectorAll(`#${id}`).forEach((sibling) => {
      (sibling as HTMLElement).style.backgroundSize = '200%';
      (sibling as HTMLElement).style.transition ='background-size 0.3s ease-in-out';
    });

    document.querySelectorAll(`#base-flecha-${id},#punta-flecha-${id}`).forEach((flechaSibling) => {
      (flechaSibling as HTMLElement).style.borderTop = 'solid 15px var(--unnamed-color-43752b)';
      (flechaSibling as HTMLElement).style.transition = 'border-top 0.3s ease-out';
    });

    document.querySelectorAll(`#selector-punto-${id}`).forEach((selectorPuntoSibling) => {
      (selectorPuntoSibling as HTMLElement).style.opacity ='0';
      (selectorPuntoSibling as HTMLElement).style.transition ='opacity 0.3s ease-out';
    });
  }
}
