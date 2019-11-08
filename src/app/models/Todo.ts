import {Category} from './Category';

export class Todo {

  done: boolean;

  constructor(public id?: string, public label?: string, public category?: Category) {
    this.done = false;
  }


}
