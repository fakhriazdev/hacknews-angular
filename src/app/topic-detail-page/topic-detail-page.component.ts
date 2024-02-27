import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TopicResponse} from "../topic-list-page/model/Topic";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-topic-detail-page',
  templateUrl: './topic-detail-page.component.html',
  styleUrls: ['./topic-detail-page.component.scss']
})
export class TopicDetailPageComponent {
  @Input() topic: TopicResponse | undefined;
  @Input() showModal: boolean = false;
  @Input() parentSpinner: NgxSpinnerService = new NgxSpinnerService();
  @Output() closeModal = new EventEmitter<void>(); // EventEmitter to notify the parent component

  close(): void {
    this.closeModal.emit();
  }
}




