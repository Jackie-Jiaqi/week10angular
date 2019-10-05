import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'
import {ActorService} from '../actor.service'
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  selection: number = 1
  year: number
  title: string = ''
  movies: any = []
  id:string=''
  actors:any=[]
  name=''
  actorId=''
  constructor(private service: MovieService,private service2:ActorService) { }

  ngOnInit() {
    this.getAllMovies()
    this.onGetActor()
  }
  onGetActor(){
    this.service2.getActors().subscribe((actors)=>{
      this.actors = actors
      // console.log(this.actors);
    })
  }
  changeSection(i: number) {
    this.selection = i
  }
  getAllMovies() {
    this.service.getAllMovie().subscribe(result => {
      console.log(result)
      this.movies = result
    })
  }
  saveNewMovie() {
    let obj = { title: this.title, year: this.year }
    this.service.addMovie(obj).subscribe(result => {
      this.getAllMovies()
      this.selection=1
      this.title=''
      this.year=null
    })
  }
  deleteMovies(item){
    this.id = item._id
    this.service.deleteMovie(this.id).subscribe(result=>{
      console.log('saa',result);
      this.getAllMovies()
      this.selection=4
    })
  }
  deleteMovieByYear(){
    console.log(this.year,'year');
    this.service.deleteMovieByYear(this.year).subscribe(result=>{
      this.getAllMovies()
      this.selection=1
    })
  }
  insertActorToMovie(){
    let obj = {id:this.actorId}
    this.service.insertActorToMovie(obj,this.id).subscribe(result=>{
      this.getAllMovies()
      this.selection=1
    })
  }
}
