import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("Github profile on init");
  
    //   this.route.paramMap
  //     .subscribe(params => {
  //         //console.log(params);
  //         let id = +params.get('id');
  //         console.log(id);
  //     });

    // this.route.paramMap
    // .subscribe(params => {
    //     console.log(params.get('id'));
    // });

    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }  

}
