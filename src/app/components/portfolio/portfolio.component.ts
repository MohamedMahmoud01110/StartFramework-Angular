import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  imgSrc:string = "./images/port2.png";
  isModalOpen: boolean = false;


  openModal(imgSrc:string): void {
    this.imgSrc = imgSrc;
    this.isModalOpen = true;
  }


  closeModal(e:MouseEvent): void {
    const target = e.target as HTMLElement;
    if(target.id =="boxItem" || target.id == "boxContainer")
    {
      this.isModalOpen = false;
    }
  }
}
