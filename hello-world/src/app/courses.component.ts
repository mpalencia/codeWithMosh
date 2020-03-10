import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
	selector: 'courses', 
	//template: '<h2>{{ getTitle }}</h2>'
	template: `
				<h2>{{ title }}</h2>
				<ul>
					<li *ngFor="let course of courses">
						{{ course }}
					</li>
				<ul>
				<button class="btn btn-primary" [class.active]="isActive">Save</button>
				<button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue': 'black'">Save</button>
				<button (click)="onSave()">Save on click</button>
				<button (click)="onSaveEvent($event)">Save on Event</button>

				<br>
				<input (keyup)="onKeyUp($event)" />
				<input (keyup.enter)="onKeyUp2()" />
				<input #email (keyup.enter)="onKeyUp3(email.value)" />
	`				
})

export class CoursesComponent {
	onKeyUp3(email) {
		console.log(email);
	}

	onKeyUp2() {
		console.log("ENTER was pressed");
	}

	onKeyUp($event) {
		if ($event.keyCode === 13) console.log("Enter was pressed")
	}

	onSave(){
		console.log("Button was clicked");
	}

	onSaveEvent($event){
		console.log("Button was clicked", $event);
	}


    isActive = false;
	title = "List of courses";
	courses;


	constructor(service: CoursesService) {
		this.courses = service.getCourses();
	}


	//constructor() {
	//	let service = new CoursesService();
	//	this.courses = service.getCourses();
	//}

	//courses = ["course1", "course2", "course3"];
	// Logic for calling an HTTP service

//	getTitle() {
//		return this.title;
//	}
}