// topic-list-page.component.ts
import { Component, OnInit } from '@angular/core';
import { TopicListService } from './service/topic-list.service';
import { forkJoin } from 'rxjs';
import { TopicResponse } from "./model/Topic";
import {DeferentTime} from "../utils/deferent-time";
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-topic-list-page',
  templateUrl: './topic-list-page.component.html',
  styleUrls: ['./topic-list-page.component.scss']
})
export class TopicListPageComponent implements OnInit {
  topics: TopicResponse[] = [];
  modalTopic: TopicResponse | undefined;
  showModal: boolean = false;
  parentSpinner = this.spinner;

  constructor(private topicListService: TopicListService,private deferentTime: DeferentTime, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.getTopics();
  }

  openDetailModal(topic: TopicResponse): void {
    this.modalTopic = topic;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
  getTopics() {
    this.spinner.show();
    this.topicListService.getAskTopic().subscribe((ids) => {
      const id = ids as number[];
      const observables = id.map((id) => this.topicListService.getTopics(id));
      forkJoin(observables).subscribe((topicDetails) => {
        this.topics = topicDetails as TopicResponse[];
        this.topics.forEach((topic) => {
          topic.countComments = Array.isArray(topic.kids) ? topic.kids.length : 0;
          topic.timeAgo = this.deferentTime.convertTimestamp(topic.time);
        });
        this.spinner.hide();
      });
    });

  }


}
