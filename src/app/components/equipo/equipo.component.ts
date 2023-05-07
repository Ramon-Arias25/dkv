import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  items!: NodeListOf<Element>;
  dots!: NodeListOf<Element>;
  upimg!: NodeListOf<Element>;
  downimg!: NodeListOf<Element>;
  current: number = 0;

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    this.items = document.querySelectorAll('.item');
    this.dots = document.querySelectorAll('.dotimg');
    this.upimg = document.querySelectorAll('.upimg');
    this.downimg = document.querySelectorAll('.downimg');
    // setInterval(() => this.showNext(), 3000);
    // this.items.forEach((item) => {
    //   item.addEventListener('click', () => this.showNext());
    // });
  }

  showNext() {
    const previous = this.current;
    if (this.current <= 2) {
      this.current = (this.current + 1) % this.items.length;
      this.items[previous].classList.remove('active');
      this.items[this.current].classList.add('active'); 
      this.dots[previous].classList.remove('dotActive');
      this.dots[this.current].classList.add('dotActive');
      if(this.current >= 3){
        this.downimg[0].classList.remove('imgActive');
        this.upimg[0].classList.add('imgActive');
      } else if(this.current <= 0){
        this.upimg[0].classList.remove('imgActive');
        this.downimg[0].classList.add('imgActive');
      } else{
        this.upimg[0].classList.add('imgActive');
        this.downimg[0].classList.add('imgActive');
      }
    }

  }
  
  showPrevious() {
    const previous = this.current;
    
    if (this.current > 0) {
      this.current = (this.current - 1) % this.items.length;
      this.items[previous].classList.remove('active');
      this.items[this.current].classList.add('active'); 
      this.dots[previous].classList.remove('dotActive');
      this.dots[this.current].classList.add('dotActive');
      if(this.current >= 3){
        this.downimg[0].classList.remove('imgActive');
        this.upimg[0].classList.add('imgActive');
      } else if(this.current <= 0){
        this.upimg[0].classList.remove('imgActive');
        this.downimg[0].classList.add('imgActive');
      } else{
        this.upimg[0].classList.add('imgActive');
        this.downimg[0].classList.add('imgActive');
      }    
    }
  }
  goBack() {
    this.location.back();
  }
}
