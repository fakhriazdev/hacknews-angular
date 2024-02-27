import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {askTopicUrl, itemUrl} from "../../app.constants";


@Injectable({
  providedIn: 'root'
})
export class TopicListService {

  constructor(private http: HttpClient) {}
  getAskTopic() {
    return this.http.get(askTopicUrl);
  }

  getTopics(id: number) {
    return this.http.get(`${itemUrl}/${id}.json`);
  }
}
