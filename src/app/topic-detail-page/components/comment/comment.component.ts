import {Component, Input} from '@angular/core';
import {CommentService} from "./service/comment.service";
import {CommentInfoResponse} from "./model/CommentInfo";
import {DeferentTime} from "../../../utils/deferent-time";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() commentId = 0;
  @Input() parentSpinner: NgxSpinnerService = new NgxSpinnerService();
  commentInfo: CommentInfoResponse | null = null;
  private _deferentTime: DeferentTime;
  constructor(private commentService: CommentService ,deferentTime: DeferentTime) {
    this._deferentTime = deferentTime;
  }
  ngOnInit(){
    this.fetchComment()
  }
  fetchComment() {
    this.parentSpinner.show();

    this.commentService.getComment(this.commentId).subscribe(
      (data) => {
        this.commentInfo = data as CommentInfoResponse;
        this.commentInfo.timeAgo = this._deferentTime.convertTimestamp(this.commentInfo.time);
      },
      (error) => {
        console.error('Error fetching comment:', error);
      },
      () => {

        this.parentSpinner.hide();
      }
    );
  }
}
