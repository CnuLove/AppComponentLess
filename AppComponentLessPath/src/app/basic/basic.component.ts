import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css'
})
export class BasicComponent {

  user:any;
  constructor(private route:ActivatedRoute){
    this.user=this.route.snapshot.data['user'];
    console.log(this.user);
  }
}
