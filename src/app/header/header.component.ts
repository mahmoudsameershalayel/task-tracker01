import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { UiService } from '../services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'task-tracker';

  showAddTask: boolean;
  subscribtion: Subscription;

  constructor(private taskService: TaskService, private uiService: UiService) {
    this.subscribtion = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
