import { FizzBuzzService } from './../../servicos/fizz-buzz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent implements OnInit {

  constructor(private fizzBussService : FizzBuzzService) { }

  limite : number = 15
  resultado : string[] = []

  teste : number = 0
  ngOnInit(): void {
    
  }

  setLimite(event: any){
    console.log(event);
    
    if (event.keyCode != 13){
    this.resultado = []
    this.limite = event.target.value
    }
  }

  gerar(event:any){
    event.preventDefault();
    this.resultado = this.fizzBussService.gerar(this.limite);
  }

}
