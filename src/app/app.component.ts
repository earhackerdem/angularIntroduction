import { Component } from '@angular/core';
import { Product } from './product.model';
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
    name: "Saul",
    age: 25,
    avatar: "https://source.unsplash.com/random"
  }

  names: string[] = ['Mike', 'Saul', 'Earvin'];
  newName = '';

  products:Product[] =  [
    {
      name: 'The best toy',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Brand new bike',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Album',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'My books',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Dog house',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Glasses',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  public toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
