import { Component } from '@angular/core';

interface List {
  image: string;
  name: string;
  position: string;
  twitter: string;
  linkin: string;
  instagram: string;
}
@Component({
  selector: 'app-employee-profile',
  standalone: true,
  imports: [],
  templateUrl: './employee-profile.component.html',
  styleUrl: './employee-profile.component.css',
})
export class EmployeeProfileComponent {
  lists: List[] = [
    {
      image: 'assets/images/about/member1.svg',
      name: 'Alice Johnson',
      position: 'CEO',
      twitter: 'https://twitter.com/alicejohnson',
      linkin: 'https://facebook.com/alicejohnson',
      instagram: 'https://instagram.com/alicejohnson',
    },
    {
      image: 'assets/images/about/member2.svg',
      name: 'Bob Smith',
      position: 'CTO',
      twitter: 'https://twitter.com/bobsmith',
      linkin: 'https://facebook.com/bobsmith',
      instagram: 'https://instagram.com/bobsmith',
    },
    {
      image: 'assets/images/about/member3.svg',
      name: 'Charlie Brown',
      position: 'CFO',
      twitter: 'https://twitter.com/charliebrown',
      linkin: 'https://facebook.com/charliebrown',
      instagram: 'https://instagram.com/charliebrown',
    },
  ];
}
