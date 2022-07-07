import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

export class TodoService {
  constructor(public http: HttpClient) {}

  add(todo: any) {
    return this.http.post<Object>('...', todo).subscribe((result) => {
      return result;
    });
    // return this.http.post('...', todo).map((r) => r.json());
  }

  getTodos() {
    return this.http.get<Object>('...').subscribe((result) => {
      return result;
    });
    // return this.http.get('...').map((r) => r.json());
  }

  delete(id: any) {
    return this.http.delete<Object>('...').subscribe((result) => {
      return result;
    });
    // return this.http.delete('...').map((r) => r.json());
  }
}
