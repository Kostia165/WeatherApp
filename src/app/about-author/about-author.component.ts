import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about-author',
  templateUrl: './about-author.component.html',
  styleUrls: ['./about-author.component.css']
})
export class AboutAuthorComponent implements OnInit {

  constructor(
    private _location: Location
  ) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

}
