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

  names:string[] = ['Mike','Saul','Earvin'];
  newName = '';
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  public toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  deleteName(index:number){
    this.names.splice(index,1);
  }
}
