import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
// import * as EventEmitter from 'events'

@Component({
  selector: 'app-fetcher',
  templateUrl: './fetcher.component.html',
  styleUrls: ['./fetcher.component.css']

})



export class FetcherComponent implements OnInit {

  constructor(private http:HttpClient) { }

 @Input() prop:number=1

 @Output() event1:EventEmitter<any>=new EventEmitter
 @Output() event2:EventEmitter<string>=new EventEmitter
  todos:Todo[]=[]
 
  title:string=""
  name:string=""


  clicker=()=>{
    console.log("hii",this.name)
this.event2.emit(this.name)
  }

  someevent=()=>{
    console.log("child1")
    this.event1.emit("Sugar")
  }

  caller=()=>{
    console.log("child2")
    this.someevent()
  }


  submitForm():void{
    console.log("called")
    this.http.post("http://localhost:5000/createtodos",{
      title:this.title,
      
      completed:false
    }).subscribe(Res=>this.todos.push(<any>Res))
  }

  ngOnInit(): void {


    this.http.get<any>("http://localhost:5000/gettodos").subscribe(
      response=>
      this.todos=response
    )
  }

}

export interface Todo{
  
  title:string,
  completed:boolean
}