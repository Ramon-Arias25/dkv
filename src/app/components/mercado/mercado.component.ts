import { Component } from '@angular/core';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.css'],
})
export class MercadoComponent {
  
  // constructor(
  //   private location: Location
  // ) { }

  ngOnInit(): void {}

  handleHover(id: string) {
    const siblings = document.querySelectorAll(`#${id}`);
    siblings.forEach((sibling) => {
      (sibling as HTMLElement).style.backgroundSize = '200%';
      (sibling as HTMLElement).style.transition = 'background-size 0.3s ease-in-out';
      (sibling as HTMLElement).classList.add('oscurecer');
    });
    const flechaSiblings = document.querySelectorAll(`#base-flecha-${id},
                                                      #punta-flecha-${id}`);

    flechaSiblings.forEach((flechaSibling) => {
      (flechaSibling as HTMLElement).style.borderTop = 'solid 15px var(--unnamed-color-98a92a)';
      (flechaSibling as HTMLElement).style.transition = 'border-top 0.3s ease-out';
    });
    const pSiblings = document.querySelectorAll(`#${id}-p`);

    pSiblings.forEach((pSibling) => {
(pSibling as HTMLElement).style.zIndex = '1';
});
  }

  handleMouseLeave(id: string) {
    const siblings = document.querySelectorAll(`#${id}`);
    siblings.forEach((sibling) => {
      (sibling as HTMLElement).style.backgroundSize = '170%';
      (sibling as HTMLElement).style.transition = 'background-size 0.3s ease-in-out';
      (sibling as HTMLElement).classList.remove('oscurecer');
    });
    const flechaSiblings = document.querySelectorAll(`#base-flecha-${id},
                                                    #punta-flecha-${id}`);

    flechaSiblings.forEach((flechaSibling) => {
      (flechaSibling as HTMLElement).style.borderTop = 'solid 15px var(--unnamed-color-43752b)';
      (flechaSibling as HTMLElement).style.transition = 'border-top 0.3s ease-out';
    });
  }

  // goBack() {
  //   this.location.back();
  // }
}
