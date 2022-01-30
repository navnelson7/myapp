import { Component } from "@angular/core";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})


export class BodyComponent{
  personajes: string[] = ['Iron Man', 'Thor', 'Dr. Strange']
  frase: any ={
    mensaje:'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parker'
  }
}
