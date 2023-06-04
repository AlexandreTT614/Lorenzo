import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Keeping up with Lorenzito';
  imagesVisible = false;
  notesVisible = false;
  mainVisible = true;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigateToDash() {
    // setTimeout(()=>{
      // this.setVisible();
      this._router.navigate(['']);
      this.mainVisible = true;
    // }, 200);
    
  }

  navigateToImages() {
    // setTimeout(()=>{
      // this.setHidden();
      this._router.navigate(['images']);
    // }, 200);
    
  }

  navigateToNotes() {
    setTimeout(()=>{
      // this.setHidden();
      this._router.navigate(['notes']);
    }, 200);
  }

  navigateToDetailView() {
    this._router.navigate(['details']);
  }

  toggleImages() {
    this.navigateToDash();
    if (this.notesVisible === true) this.notesVisible = false;
    if (this.imagesVisible === false) {
      this.imagesVisible = true;
    } else if (this.imagesVisible === true) {
      this.imagesVisible = false;
    }
  }

  toggleNotes() {
    if (this.imagesVisible === true) this.imagesVisible = false; 
    if (this.notesVisible === false) {
      this.notesVisible = true;
    } else if (this.notesVisible === true) {
      this.notesVisible = false;
    }
  }

  toggleMain() {
    if (this.mainVisible === false) {
      this.mainVisible = true;
    } else if (this.mainVisible === true) {
      this.mainVisible = false;
    }
  }

  setHidden() {
    this.imagesVisible = false;
    this.notesVisible = false;
    this.mainVisible = false;
  }

}
