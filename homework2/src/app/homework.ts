export default class Homework {
  public nameTheme: string;
  public task: string;
  public status: boolean;

  constructor(nameTheme: string, task: string, status: boolean) {
    this.nameTheme = nameTheme;
    this.task = task;
    this.status = status;
  }
}
