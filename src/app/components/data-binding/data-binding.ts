import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  title: string = "Register"

  inputType: string = "number"

  count: number = 0

  increment() {
    this.count++
  }
}
