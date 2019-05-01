import Homework from './homework';

export default class User {
  public name: string;
  public surname: string;
  public taskList: {nameTheme: string; task: string; status: boolean};
  private id: number = Math.ceil(Math.random() * 100);

  constructor (name: string, surname: string, taskList) {
    this.name = name;
    this.surname = surname;
    this.taskList = taskList;
  }

  showId () {
    console.log(this.id);
  }
}


