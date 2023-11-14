import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProfilePage';
  sum: number = 1;
  onRaiseSum(data: number): void {
    this.sum *= data;
  }
}
