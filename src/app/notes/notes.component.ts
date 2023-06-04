import { Component } from "@angular/core";
import { NotesService } from "./notes.service";

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.css']
})
export class NotesComponent {
    title = "Notes";
    notes;

    constructor(service: NotesService) {
        this.notes = service.getNotes();
    }
}