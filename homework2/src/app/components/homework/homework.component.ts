import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import Homework from '../../homework';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeworkComponent implements OnInit {
  @Input() task: Homework;

  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.ref.detectChanges();
    }, 1000);
   }

  ngOnInit() {
  }

  onClickMe(task: Homework) {
    this.task.status = !this.task.status;
  }

}
