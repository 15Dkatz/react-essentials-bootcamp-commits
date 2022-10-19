import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log('I am', this.name, 'and I am', this.age, 'years old');
  }
}

const animal1 = new Animal('Simba', 3);
animal1.speak();

console.log(animal1);

class Lion extends Animal {
  constructor(name, age, furColor, speed) {
    super(name, age);
    this.furColor = furColor;
    this.speed = speed;
  }

  roar() {
    console.log(
      'ROOOAR! I have',
      this.furColor,
      'fur, and I can run',
      this.speed,
      'miles an hour!'
    );
  }
}

const lion1 = new Lion('Mufasa', 20, 'golden', 25);
lion1.speak();
lion1.roar();
console.log(lion1);
