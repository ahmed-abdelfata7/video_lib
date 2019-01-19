import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
  inputs: ["video"]
})
export class VideoDetailsComponent implements OnInit {
  private title_edit: Boolean = false;
  private url_edit: Boolean = false;
  private description_edit: Boolean = false;

  constructor() { }

  ngOnInit() {
  }
  edit(videoElement) {
    if (videoElement == 'title') this.title_edit = true;
    if (videoElement == 'url') this.url_edit = true;
    if (videoElement == 'description') this.description_edit = true;

  }
}
