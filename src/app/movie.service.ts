import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: 'root'
})
export class MovieService {
baseUrl = 'http://127.0.0.1:8080/movie'
  constructor(private http:HttpClient) { }

  addMovie(obj){
    return this.http.post(this.baseUrl,obj)
  }
  getAllMovie(){
    return this.http.get(this.baseUrl)
  }
  updateMovie(obj,id){
    return this.http.put(this.baseUrl+'/'+id,obj)
  }
  deleteMovie(id){
    console.log('id',id);
    return this.http.delete(this.baseUrl+'/'+id)
  }
  deleteMovieByYear(year){
    console.log(year,'aaa');
    return this.http.delete(this.baseUrl+'/week10/deleteByYear/'+year)
  }
  insertActorToMovie(obj,id){
    return this.http.post(this.baseUrl+'/'+id,obj);
  }
}
