import User from './user'
import Homework from './homework'

const alex = new User('Aleksandr', 'Petrov', new Homework('strings', 'exercise1', true));
const dima = new User('Dmitry', 'Ivanov', new Homework('numbers', 'exercise2', true));
const vova = new User('Vladimir', 'Sidorov', new Homework('arrays', 'exercise1', false));

export const userList: User[] = [alex, dima, vova];
