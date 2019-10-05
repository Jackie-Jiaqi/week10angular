import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ActorComponent } from './actor/actor.component';
import {ActorService} from './actor.service';
import {MovieService} from './movie.service';
import {FormsModule} from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ActorService,MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
