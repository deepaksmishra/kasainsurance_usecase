import { Component, OnInit } from '@angular/core';

 import { Observable } from 'rxjs';
//import user.ts
import { User } from '../user';
//importuser-service.service.ts
import { UserServiceService } from '../user-service.service';
//import for Form designing in Angular
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit 
{

  Gender = ['male', 'female'];
  allUsers :Observable<User[]> | any; 
  userForm :FormGroup | any;
  dataSaved = false;
  userIdUpdate = null;
  message = null;
  //inheriting UserServiceService from user-service.service.ts
  constructor(private userservice:UserServiceService)
  {

  }
  //create a function onSubmit 
  onSubmit()
  {
    console.log(this.userForm)
    this.dataSaved = false;
    const user = this.userForm.value;
    //Invoking the CreateUser function
    this.CreateUser(user);
    this.userForm.reset();
  }
  //create a function CreateUser for registration of a new user
  CreateUser(user: User) {
    if (this.userIdUpdate == null) {
      //subscribe() is a method on the Observable type. The Observable type is a 
      //utility that asynchronously or synchronously streams data 
      //to a variety of components or services that have subscribed to the observable.
      this.userservice.createUser(user).subscribe(
        () => {
          this.dataSaved = true;
          //this.message = 'Record saved Successfully';
          this.loadAllUsers();
          this.userIdUpdate = null;
          this.userForm.reset();
        }
      );
    } else {
      user.id = this.userIdUpdate;
      this.userservice.updateUser(user).subscribe(() => {
        this.dataSaved = true;
        //this.message = 'Record Updated Successfully';
        this.loadAllUsers();
        this.userIdUpdate = null;
        this.userForm.reset();
      });
    }
  }
  ngOnInit(): void {
    this.loadAllUsers();
    console.log(this.allUsers)
    this.userForm=new FormGroup({
      'FullName':new FormControl(null),
      'UserName':new FormControl(null),
      'Email':new FormControl(null),
      'PhoneNumber':new FormControl(null),
      'Password':new FormControl(null),
      'Gender':new FormControl(null)
    })
  }
  loadAllUsers()
  {
    this.allUsers=this.userservice.getAllUsers();
  }
  //create a function loadUserToEdit to update the details of existing user
  loadUserToEdit(userId: number) 
  {
      this.userservice.getUserById(userId).subscribe(user => 
      {
      this.message = null;
      this.dataSaved = false;
      this.userIdUpdate = user.id;
      this.userForm.controls['FullName'].setValue(user.FullName);
      this.userForm.controls['UserName'].setValue(user.UserName);
      this.userForm.controls['Email'].setValue(user.Email);
      this.userForm.controls['PhoneNumber'].setValue(user.PhoneNumber);
      this.userForm.controls['Password'].setValue(user.Password);
      this.userForm.controls['Gender'].setValue(user.Gender);
      
      
    });

  }
  //create a function deleteUser to delete an existing user
  deleteUser(userId: number) {
    if (confirm("Are you sure you want to delete this ?")) {  
    this.userservice.deleteUserById(userId).subscribe(() => {
      this.dataSaved = true;
     // this.message = 'Record Deleted Succefully';
      this.loadAllUsers();
      this.userIdUpdate = null;
      this.userForm.reset();

    });
  }
}
  resetForm() {
    this.userForm.reset();
    this.message = null;
    this.dataSaved = false;
  }
}