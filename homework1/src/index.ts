import User from './user';
import Homework from './homework';

const alex = new User('Aleksandr', 'Petrov', new Homework('strings', 'exercise1', true));
const dima = new User('Dmitry', 'Ivanov', new Homework('numbers', 'exercise2', true));
const vova = new User('Vladimir', 'Sidorov', new Homework('arrays', 'exercise1', false));

const userList: User[] = [alex, dima, vova];

function writeInfo(userList: User[]): void {
  userList.forEach((item) => {
    console.log(`Name: ${item.name}`);
    console.log(`Task: ${item.taskList.task} Status: ${item.taskList.status}`);
  });
}

function writeCount(userList: User[]):void {
  let i: number = 0;
  userList.forEach((item) => {
    if (item.taskList.status === true) {
      i++;
    }
  })
  console.log(i);
}

writeInfo(userList);
console.log(writeCount(userList));


// const writeNumber = (userList: User[]) => {
//   const countStatus = userList.forEach((item) => {
//     let i: number = 0;
//       if ({taskList: {status}} === true) {
//         i++;
//       }
//     return i;
//   })
// }
