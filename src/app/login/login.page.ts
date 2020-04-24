import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
firstname:string;
lastname:string;
email:string;
password:string;
  constructor(private storage: Storage) { }

  ngOnInit() {


  }

  SaveData(){

this.storage.set("firstname", this.firstname);
console.log(this.firstname);
this.storage.set("lastname", this.lastname);
console.log(this.lastname);
this.storage.set("email", this.email);
console.log(this.email);
this.storage.set("password", this.password);
console.log(this.password);

  }
  

}
