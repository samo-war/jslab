export default class User {
  public name: string;
  public surname: string;
  public taskList: {nameTheme: string, task: string, status: boolean}[];

  private id: number = Math.ceil(Math.random() * 100);

  constructor(name: string, surname: string, ...taskList: {nameTheme: string, task: string, status: boolean}[]) {
    this.name = name;
    this.surname = surname;
    this.taskList = taskList;
  }

  checkDone(): boolean {
    return this.taskList.every(task => task.status);
  }

}
