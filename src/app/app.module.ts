import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicListPageComponent } from './topic-list-page/topic-list-page.component';
import {ChunkPipe} from "./topic-list-page/chuck-pipe";
import { TopicDetailPageComponent } from './topic-detail-page/topic-detail-page.component';
import { CommentComponent } from './topic-detail-page/components/comment/comment.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgIconsModule } from '@ng-icons/core';
import {heroArrowSmallRight, heroChatBubbleOvalLeftEllipsis, heroClock} from "@ng-icons/heroicons/outline";


@NgModule({
  declarations: [
    AppComponent,
    TopicListPageComponent,
    ChunkPipe,
    TopicDetailPageComponent,
    CommentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgIconsModule.withIcons({heroArrowSmallRight,heroClock,heroChatBubbleOvalLeftEllipsis})


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
