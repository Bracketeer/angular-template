import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  logo = "https://assuritystorage.blob.core.windows.net/images/Assurity_horiz_logo_white.png"
  constructor() { }

  ngOnInit() {

  }

}
