import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ["videos"],
  outputs: ["selectedVideo"]
})
export class VideoListComponent implements OnInit {
  public selectedVideo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSelect(video: Video) {
    this.selectedVideo.emit(video);
  }

}
