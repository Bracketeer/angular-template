import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  title = "Assurity Life Insurance"
  constructor() { }

  ngOnInit() {

  }

}
