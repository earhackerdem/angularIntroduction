import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'saul';
  age = 25;
  img = "https://source.unsplash.com/random";
  btnDisabled = true;
  person = {
    name:"Saul",
    age: 25,
    avatar : "https://source.unsplash.com/random"
  }

  public toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }
}
