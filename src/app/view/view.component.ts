import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data:any[200]=[]
  number:any[200]=[]
  
  i=0;
  term=""
  dis=true
  add=()=>
  {
    if(this.term!=""){

      var a:any={
        "id":this.i,
        "number":this.term
        ,"valid":true

      }
      this.data[this.i]=a
    this.i++}
    else{
      alert("enter first")
    }
    if(this.i>1)
    {this.dis=false

    }
    
  }
  delete=(value:any)=>
  {
    this.data[value].valid=false;
this.data[value].number=""


  }
  submit=()=>
  {
    for(var l=0;l<this.data.length;l++)
  {if(this.data[l].valid)
    console.log(this.data[l])
  }
  }
}