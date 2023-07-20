import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { io } from 'socket.io-client';
@Injectable({
  providedIn: 'root',
})
export class SocketGetwayService {
  private socket = null;
  constructor() {}
  private getConnection() {
    if (this.socket === null || !this.socket.connected) {
      this.socket = io(environment.apiUrl);
    }
    return this.socket;
  }
  listenEvent<T>(event: string): Observable<T> {
    let observable: Observable<T> = new Observable(observer => {
      this.getConnection().on(event, (data) => {
        observer.next(data);
      });
    })
    return observable;
  }
}
