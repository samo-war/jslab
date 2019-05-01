export default class Homework {
  nameTheme: string;
  task: string;
  status: boolean;

  constructor (nameTheme: string, task: string, status: boolean) {
    this.nameTheme = nameTheme;
    this.task = task;
    this.status = status;
  }
}
