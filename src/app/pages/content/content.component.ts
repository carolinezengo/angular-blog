import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContetComponent implements OnInit {
  photoCover:string = ""
  
  contetTitle:string = ""

  contentDescription:string = ""

  private id:string | null = "0"

  constructor(
      private route:ActivatedRoute
      ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
      
    this.setValuesToComponent(this.id)     
   
  }
  
  setValuesToComponent(id:string | null){
   
    const result = dataFake.filter(a =>
    a.id == id)[0]
    
    this.contetTitle=result.title
    this.contentDescription= result.description
    this.photoCover=result.photoCover
          
  }

}
