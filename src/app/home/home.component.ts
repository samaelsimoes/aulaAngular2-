import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items: any = [
    {
      nameImage: "cerveja",
      descricao: "teste teste 1",
      valor: "133,33",
      titulo: " Cerveja stella"
    },
    {
      nameImage: "cerveja",
      descricao: "teste teste 2",
      valor: "135,33",
      titulo: " Cerveja outra cerveja"
    },
    {
      nameImage: "cerveja",
      descricao: "teste teste 3",
      valor: "136,33",
      titulo: " Cerveja outra cerveja 2"
    },
    {
      nameImage: "cerveja",
      descricao: "teste teste 3",
      valor: "136,33",
      titulo: " Cerveja outra cerveja 2"
    },
  ] 
}
