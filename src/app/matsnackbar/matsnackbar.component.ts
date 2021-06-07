import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-matsnackbar',
  templateUrl: './matsnackbar.component.html',
  styleUrls: ['./matsnackbar.component.css']
})
export class MatsnackbarComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, className: string) {

    this.snackBar.open(message, 'Close', {
     duration: 2000,
     verticalPosition: 'bottom',
     horizontalPosition: 'center',
     panelClass: [className],
    });
  }

}
