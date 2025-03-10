import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountService: AccountService) {
  }

  onSetTo(status: string) {
    this.accountService.onStatusChanged(this.id, status);
    this.accountService.statusUpdated.emit(status);
  }
}
