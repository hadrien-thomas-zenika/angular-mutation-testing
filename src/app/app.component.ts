import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title: string;

	constructor(private logService: LogService) {
	}

	ngOnInit(): void {
		this.title = 'This is a title';
		this.logService.log('Init app component');
	}
}
