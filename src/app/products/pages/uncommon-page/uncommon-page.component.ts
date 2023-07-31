import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  
  // i18n Select

  public name: string = 'Fernando';
  public gender: 'male'|'female' = 'male';
  public invitationMap ={
    male:'invitarlo',
    female: 'invitarla'
  }
  

  changeCLient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural

  public clientes: string[] = ['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia'];
  public clientMap={
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient():void{
     this.clientes.shift();
  }

  // KeyValue 

  public person = {
     name : 'Fernando',
     age : 36,
     addres : 'Ottawa, Canadá'
  }

  // async Pipe
  
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value=> console.log('tap', value) )
  );

  public promiseValue: Promise<string>= new Promise( (resolve, reject)=>{
      setTimeout(()=>{
          resolve('Tenemos data de la promesa');
          console.log("tenemos data en la promesa")
        },3500);
  });
  

}
