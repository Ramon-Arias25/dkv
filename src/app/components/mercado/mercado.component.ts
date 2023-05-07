import { Component } from '@angular/core';

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.css'],
})
export class MercadoComponent {
  constructor() {}

  ngOnInit(): void {}
  // .borde-top:hover .base-flecha,
  // .borde-top:hover .punta-flecha{
  //     border-top: solid 20px var(--unnamed-color-98a92a);
  //     transition: border-top 0.3s ease-out;
  // }
  // border-left: 19px solid transparent;
  // border-right: 19px solid transparent;
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
    // const fondoSiblings = document.querySelectorAll(`#fondo-${id}`);

    // fondoSiblings.forEach((flechaSibling) => {
    //   (flechaSibling as HTMLElement).style.display = 'block';
    //   (flechaSibling as HTMLElement).style.transition = 'display 0.3s ease-out';
    // });
  }
}
