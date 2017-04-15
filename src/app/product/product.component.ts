import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  products = [
    {
      title: 'Accident Expense',
      content: "Pays a fixed cash benefit for an insured's medical treatments, dismemberment or death resulting from a covered accident.",
      image: 'http://fillmurray.com/155/155',
      link: '#'
    },
    {
      title: 'Hospital Indemnity',
      content: "Provides a daily benefit for hospital confinement die to a covered accident or sickness - with no deductibles or coinsurance.",
      image: 'http://fillmurray.com/155/155',
      link: '#'
    },
    {
      title: 'Disability Income',
      content: 'Provides short-term benefits to help replace lost income due to disability resulting from a covered accident or illness.',
      image: 'http://fillmurray.com/155/155',
      link: '#'
    },
    {
      title: 'Critical Illness',
      content: "Pays a lump sum cash benefit ipon diagnosis of specified illnesses or conditions, or undergoing specific medical procedures.",
      image: 'http://fillmurray.com/155/155',
      link: '#'
    },
    {
      title: 'Basic Care Hospital Indemnity',
      content: 'Provides coverage beyond hospital confinements to include emergency, diagnostic, wellness and critical illness care - with no deductibles or coinsurance.',
      image: 'http://fillmurray.com/155/155',
      link: '#'
    },
    {
      title: 'Cancer Expense',
      content: 'Pays a specified indemnity benefits for the diagnosis treatment and prevention of cancer.',
      image: 'http://fillmurray.com/155/155',
      link: '#'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
