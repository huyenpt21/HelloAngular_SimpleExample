import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgIf';

  message = 'I\'m read only!';

  canEdit = false;

  fontColor = 'red';

  onEditClick(){
    this.canEdit = !this.canEdit;
    if(this.canEdit){
      this.message = "You can edit me!"; 
      this.fontColor = 'green';
    }else{
      this.message = "I'm read only!";
      this.fontColor = 'red';
    }
  }
}
