import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Video[] = [
    {
      "_id": "5c3d6716fb6fc0600be06820",
      "title": "FirstVideo",
      "url": "https://www.youtube.com/watch?v=GVvZsr12WjE&list=PLC3y8-rFHvwj200LLotCYum_9wmGeTJx9&index=13",
      "description": "mean stack tutrials"
    },
    {
      "_id": "5c3d6716fb6fc0600be06820",
      "title": "SecondVideo",
      "url": "https://www.youtube.com/watch?v=GVvZsr12WjE&list=PLC3y8-rFHvwj200LLotCYum_9wmGeTJx9&index=13",
      "description": "mean stack tutrials"
    },
    {
      "_id": "5c3d6716fb6fc0600be06820",
      "title": "ThirdVideo",
      "url": "https://www.youtube.com/watch?v=GVvZsr12WjE&list=PLC3y8-rFHvwj200LLotCYum_9wmGeTJx9&index=13",
      "description": "mean stack tutrials"
    }, {
      "_id": "5c3d6716fb6fc0600be06820",
      "title": "ForthVideo",
      "url": "https://www.youtube.com/watch?v=GVvZsr12WjE&list=PLC3y8-rFHvwj200LLotCYum_9wmGeTJx9&index=13",
      "description": "mean stack tutrials"
    }
  ]

  constructor() { }
  selectedVideo: Video;
  ngOnInit() {
  }
  onVideoSelected(video: any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }
}
