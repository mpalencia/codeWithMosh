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
	`				
})

export class CoursesComponent {
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