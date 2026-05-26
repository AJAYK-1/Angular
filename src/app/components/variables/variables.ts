import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})

export class Variables {
  name: string = "Ajay Kumar"
  age: number = 23
  address = {
    city: "North Paravur",
    district: "Ernakulam",
    state: "Kerala"
  }
  skills: string[] = ["JavaScript", "React", "Node", "Express", "MongoDB"]
}
