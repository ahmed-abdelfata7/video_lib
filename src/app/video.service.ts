import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videosUrl = "api/videos"
  constructor(private http: HttpClient) { }
  //getAllvideos
  videos() {

    return this.http.get(this.videosUrl);
  }
}
