import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  template: `
    <p>
      people-list Works!
    </p>
  `,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  people: Person[] = [
    {name: 'Luke Skywalker', height: 177, weight: 70},
    {name: 'Darth Vader', height: 200, weight: 100},
    {name: 'Han Solo', height: 185, weight: 85},
  ];

  constructor() { }

  ngOnInit() {
  }

}
