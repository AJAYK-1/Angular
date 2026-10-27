import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers() {
    return [
      { id: 1, name: 'Ajay' },
      { id: 2, name: 'Kiran' },
      { id: 3, name: 'Hari' },
    ];
  }
}
