import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.scss']
})
export class ButtomComponent {
  @Input() titleButton!: string;

  nomeDoBotao: string = "";
  constructor() {}

  ngOnInit(): void {
    this.nomeDoBotao= this.titleButton ? this.titleButton : " sem nome";
  }
}
