import { Component, OnInit } from '@angular/core';
import {ActorService} from '../actor.service'
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actors: any =[];
  section = 1;
  name:string
  bYear:number=0
  update:number = 0
  id:string=''
  constructor(private service:ActorService) { }

  ngOnInit() {
    this.onGetActor();
  }
  onGetActor(){
    this.service.getActors().subscribe((actors)=>{
      this.actors = actors
      // console.log(this.actors);
    })
  }
  changeSection(id){
    this.section = id
    this.name=''
    this.bYear= null
  }
  saveNewActor(){
    let obj ={name:this.name,bYear:this.bYear} 
    this.service.postActor(obj).subscribe(result=>{
      // this.section = 1
      this.onGetActor()
      this.section=1
    })
  }
  updateActor(item){
    this.name = item.name
    this.bYear = item.bYear
    this.id = item._id
    this.update = 1
  }
  updateOne(){
    let obj ={name:this.name,bYear:this.bYear} 
    this.service.putActor(this.id,obj).subscribe(result=>{
      this.onGetActor()
      this.section=1
    })
  }
  deleteActor(item){
    this.id = item._id
    this.service.deleteActor(this.id).subscribe(result=>{
      this.onGetActor()
      this.section=4
    })
  }
  
}
