import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {


  public attribut: string = "date";
  public nom: string = "schruws"

  constructor() { }

  public changeAttributOnInput(): void {
    this.attribut = (this.attribut === 'date')?'input' : 'date';
  }

  ngOnInit(): void {
  }

}
