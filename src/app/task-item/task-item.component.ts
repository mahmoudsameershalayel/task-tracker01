import { Component , Input , Output , EventEmitter} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
   @Input() task : any;
   @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
   @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter();

   faTimes = faTimes;

   onDelete(task : Task){
    this.onDeleteTask.emit(task);
   }
   onToggle(task :Task){
    this.onToggleReminder.emit(task);
   }
}
