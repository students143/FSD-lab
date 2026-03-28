import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html'
})
export class ProfileComponent {
  user = {
    name: "Harshitha Reddy",
    email: "harshu@gmail.com",
    city: "Hyderabad",
    profession: "Student"
  };

}