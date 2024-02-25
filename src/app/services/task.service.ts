import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient , HttpHeaders} from "@angular/common/http";
import { Task } from '../Task';


const httpOptions = {
  headers : new HttpHeaders({
    'content-type' : 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http : HttpClient) { }

  getTasks() : Observable<Task[]>{
    const tasks = this.http.get<Task[]>(this.apiUrl);
    return tasks;
  }
  addTask(task : Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl , task , httpOptions);
  }
  deleteTask(task : Task) : Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  toggleReminder(task : Task) : Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url , task , httpOptions);
  }
}
