import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringData:string="Greeting From Angular"
  numberData:number=3.5
  imageName:string='Paris'
  imageURL:string='https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'

  inputString:string="Enter Name"

  getAllData() {
    return this.stringData + " : " + this.numberData
  }
  name:string='Pyae Pyae'
  hobby:string='Interior Designer'

  get showPersonData() {
    return this.name + " : " + this.hobby;
  }

  doSomething() {
    console.log('Hello Angular')
  }
  fruits:string[] = [];

  addFruits(fruit:string){
    this.fruits.push(fruit)
  }

  //Tow Way Data Bind
  person={
    "name":"",
    "hobby":""
  }


}

