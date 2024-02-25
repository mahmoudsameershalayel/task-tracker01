import { Component } from '@angular/core';
import { Observable , of } from 'rxjs';
import { Task } from '../Task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks :  Task[] = [];

constructor(private taskService : TaskService){
  this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
}
addTask(task : Task){
  this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
}
deleteTask(task : Task){
  this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
}
toggleReminder(task : Task){
  task.reminder = !task.reminder;
  this.taskService.toggleReminder(task).subscribe();
}
}
