import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.sass']
})
export class BottomNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    window.addEventListener("scroll", function() {
    if (window.scrollY > 10) {
        $('.bottom-navigation').removeClass('hide-bottom-nav');
        $('.bottom-navigation').addClass('show-bottom-nav');
    }
    else {
        $('.bottom-navigation').addClass('hide-bottom-nav');
        
    }
  });

  }

}
