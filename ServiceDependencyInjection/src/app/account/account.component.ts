import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() id: number;
  @Input() account: { name: string, status: string };
  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(private loggingService: LoggingService) {}

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    this.loggingService.logStatusChange(status);    
  }
}
