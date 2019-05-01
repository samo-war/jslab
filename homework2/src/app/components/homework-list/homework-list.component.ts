import { Component, OnInit, Input } from '@angular/core';
import Homework from '../../homework';

@Component({
  selector: 'app-homework-list',
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.css']
})
export class HomeworkListComponent implements OnInit {
  @Input() taskList: Homework[];
  constructor() { }

  ngOnInit() {
  }



}
