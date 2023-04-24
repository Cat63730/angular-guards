import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  private role: string = 'user';

  getRole(): string {
    return this.role;
  }
}
