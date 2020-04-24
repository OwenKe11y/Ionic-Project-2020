import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service'
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
  NewsData:any=[];
  searchBar:string = '';
  constructor(private newsService:NewsService, private iab: InAppBrowser) { }

   
  ngOnInit() {//Function for saving the API data to a variable
    this.newsService.GetBusData().subscribe(
      (data)=>{
        this.NewsData=data.articles;
      }
    );
  }

 //Function for displaying the In-App browser 
 webPage(url:string){//takes in a string 
    console.log(url);
    //create a new tab with the passed in url
    const browser = this.iab.create(url);
  }

  searchTitle(){
    this.newsService.GetSearchData(this.searchBar).subscribe(
      (data)=>{
        this.NewsData=data.articles;
      }
    );


  }
}
