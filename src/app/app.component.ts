import { Component } from '@angular/core';
import { gender } from './models/gender';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profile Editor';
  displayEdit:boolean = false;
  displayTitle:string = "User Information";
  editTitle:string = "Update User Information";
  newUser:User = {
    name:"Fred",
    age:40,
    favoriteColor:"orange",
    alreadyMember:true,
    favDrink:"Mocha",
    gender:"male"
  };
  newOne:User={} as User;
  toggleEdit():void{
    if(this.displayEdit)
      this.displayEdit = false;
    else
      this.displayEdit = true;
  }
}
