import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postService: PostsService){
    this.name = 'Ashwani Pandey';
    this.email = 'apandey@partner.aligntech.com';
    this.address = {
        street: 'Road No-14, BHEL',
        city: 'Hyderabad',
        state: 'Telangana'
    }
    this.hobbies = ['Music', 'Movies', 'Cricket'];
    this.showHobbies = false;

    this.postService.getPosts().subscribe(posts => {
        //console.log(posts);
        this.posts = posts;
    });
  }
  toggleHobbies(){
      if(this.showHobbies == true)
        this.showHobbies=false;
      else
        this.showHobbies = true;  

  }
  addHobby(hobby){
      this.hobbies.push(hobby);
  }
  OnDelete(id)
  {
      this.hobbies.splice(id,1);
  }
}

interface address{
    street: string;
    state: string;
    city: string;
}

interface Post{
    id: number;
    title: string;
    body: string;
}
