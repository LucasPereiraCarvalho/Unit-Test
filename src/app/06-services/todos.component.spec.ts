// import { TodosComponent } from './todos.component';
// import { TodoService } from './todo.service';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { TestBed } from '@angular/core/testing';
// import { Observable, of } from 'rxjs';

// const fakeReturn = [[1, 2, 3]];

// const httpClientMock = {
//   get: () => of(fakeReturn),
//   post: () => of(),
//   put: () => of(),
//   patch: () => of(),
// };

// describe('TodosComponent', () => {
//   let component: TodosComponent;
//   let service: TodoService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClient],
//       providers: [
//         TodoService,
//         {
//           provide: HttpClient,
//           useValue: httpClientMock,
//         },
//       ],
//     });
//     service = TestBed.inject(TodoService);
//   });

//   it('should set todos property with the items returned from the server', () => {
//     spyOn(service, 'getTodos').and.returnValue(of(fakeReturn));

//     component.ngOnInit();

//     expect(component.todos).toBe(fakeReturn);
//   });
// });
