import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {GithubComponent} from './components/github.component';
import { GithubService } from './services/github.service';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports: [ 

  BrowserModule,
  FormsModule,
  HttpModule
  
  ],

  declarations: [ 
  	AppComponent ,
  	GithubComponent
  ],
  providers: [ GithubService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
