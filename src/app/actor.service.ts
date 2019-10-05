import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http:HttpClient) { }
  baseUrl = 'http://127.0.0.1:8080/actor'

  getActors(){
    return this.http.get(this.baseUrl)
  }
  postActor(obj){
    console.log(obj);
    return this.http.post(this.baseUrl,obj)
  }
  putActor(id,obj){
    return this.http.put(this.baseUrl+'/'+id,obj)
  }
  deleteActor(id){
    return this.http.delete(this.baseUrl+'/'+id)
  }
}
