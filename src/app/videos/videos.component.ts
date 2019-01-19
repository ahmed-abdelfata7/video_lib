import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from './../video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: any;

  constructor(private video: VideoService) { }
  selectedVideo: Video;
  ngOnInit() {
    this.video.videos().subscribe((data) => {
      this.videos = data;
    });
  }
  onVideoSelected(video: any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }
}
