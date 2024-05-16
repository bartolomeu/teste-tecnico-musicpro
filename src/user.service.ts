import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return [
      {
        id: '3a5c1aa7-81d1-4b27-8f55-6f3f8c48b5e2',
        email: 'company@teste.com.br',
        modules: [
          {
            name: 'company',
          },
        ],
      },
      {
        id: 'c6e70325-c0a9-4a2a-a167-5579d07e9ea5',
        email: 'produto@teste.com.br',
        modules: [
          {
            name: 'products',
          },
        ],
      },
    ];
  }
}
