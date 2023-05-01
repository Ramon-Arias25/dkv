import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  ngOnInit(): void {
  }

  handleHover(id: string) {
    const siblings = document.querySelectorAll(`.contenedor:not(#${id}) p`);
    siblings.forEach(sibling => {
      (sibling as HTMLElement).style.opacity = '0';
      (sibling as HTMLElement).style.transition = 'opacity 0.3s ease-out';
    });
    const visibleSiblings = document.querySelectorAll(`#${id} .unnamed-character-style-4, 
                                                      #${id} .unnamed-character-style-11`);
    visibleSiblings.forEach(visibleSibling => {
      (visibleSibling as HTMLElement).style.opacity = '1';
      (visibleSibling as HTMLElement).style.transition = 'opacity 0.3s ease-out';
    });
  }

  handleMouseLeave(id: string) {
    const siblings = document.querySelectorAll(`.contenedor:not(#${id}) .unnamed-character-style-8,
                                                .contenedor:not(#${id}) .unnamed-character-style-6,
                                                .contenedor:not(#${id}) .unnamed-character-style-17`);
    siblings.forEach(sibling => {
      (sibling as HTMLElement).style.opacity = '1';
      (sibling as HTMLElement).style.transition = 'opacity 0.3s ease-out';
    });
    const inVisibleSiblings = document.querySelectorAll(`#${id} .unnamed-character-style-4, 
                                                         #${id} .unnamed-character-style-11`);
                                                         console.log(inVisibleSiblings.length);
    inVisibleSiblings.forEach(inVisibleSibling => {
      (inVisibleSibling as HTMLElement).style.opacity = '0';
      (inVisibleSibling as HTMLElement).style.transition = 'opacity 0.3s ease-out';
    });
  }

}
