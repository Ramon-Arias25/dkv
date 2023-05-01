import { Component } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent {
  constructor() { }

  ngOnInit(): void {
  }

  handleHover(id: string) {
    const siblings = document.querySelectorAll(`#${id}`);
    siblings.forEach(sibling => {
      (sibling as HTMLElement).style.backgroundSize = '200%';
      (sibling as HTMLElement).style.transition  = 'background-size 0.3s ease-in-out';
    });
  }

  handleMouseLeave(id: string) {
    const siblings = document.querySelectorAll(`#${id}`);
    siblings.forEach(sibling => {
      (sibling as HTMLElement).style.backgroundSize = '170%';
      (sibling as HTMLElement).style.transition  = 'background-size 0.3s ease-in-out';
    });
  }
}
