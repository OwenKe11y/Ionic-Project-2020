import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service'
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';//In app browser



@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {
NewsData:any=[];
searchBar:string = '';
  constructor(private newsService:NewsService, private iab: InAppBrowser) { }
  
  //Function for saving the API data to a variable
  ngOnInit() {
    this.newsService.GetSportsData().subscribe(
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

  //Function for the search bar in the specific article
  searchTitle(){
    this.newsService.GetSearchData(this.searchBar).subscribe(
      (data)=>{
        this.NewsData=data.articles;
      }
    );


  }
}
