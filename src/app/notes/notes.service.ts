import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

    constructor() {  }

    getNotes() {
        return [
            "Any directive that modifies the DOM is prefixed with an *", 
            "'let note of notes' is like a for each loop iterating over this notes array", 
            "Instead of 'templateUrl' you can embed a template by just using 'template' folled by the html code",
            "Lorenzito the burrito"
        ];
    }

    



}