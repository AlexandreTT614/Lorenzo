import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  visible = true;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigateToDash() {
    setTimeout(()=>{
      this.setVisible();
      this._router.navigate(['']);
    }, 200);
    
  }

  navigateToImages() {
    setTimeout(()=>{
      this.setHidden();
      this._router.navigate(['images']);
    }, 200);
    
  }

  navigateToNotes() {
    setTimeout(()=>{
      this.setHidden();
      this._router.navigate(['notes']);
    }, 200);
  }

  setHidden() {
    this.visible = false;
  }

  setVisible() {
    this.visible = true;
  }

  toggleVisible() {
    if (this.visible === false) {
      setTimeout(()=>this.setVisible(), 200);
    } else if (this.visible === true) {
      setTimeout(()=>this.setHidden(), 200);
    }
  }

}
