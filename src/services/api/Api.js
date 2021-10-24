import { Rooms } from './entities/Rooms';

class Api {
  constructor() {
    this.rooms = new Rooms();
  }
}

export { Api };
