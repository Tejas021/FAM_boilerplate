import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  myname:string=""


  eve2(data:string){
    console.log("hii")
    this.myname=data
  }

  eve1(data:any){
console.log("from child",data)
  }
}
