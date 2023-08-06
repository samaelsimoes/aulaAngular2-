import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() item!: [];

  params: any = {};

  constructor() { }

  ngOnInit(): void {
    debugger;
    this.params = this.item;
  }
}
