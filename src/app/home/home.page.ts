import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
getName:string;
  constructor(private storage: Storage) {}

  ngOnInit(){
    
    this.storage.get("firstname").then(
      (data)=>{
        this.getName = data;
      }
      ).catch(
        (error)=>{
          console.log(error);
        }
      );
      localStorage.clear();
  }

}
