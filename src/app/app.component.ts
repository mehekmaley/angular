import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pang1';
  name: string;
  username: string;

  count = 0;
  increment(){
    this.count += 1;
  }
  greet(updatedvalue){
    if(updatedvalue == 'mehek'){
      alert("welcome back" + this.username);
    }
  }
}
