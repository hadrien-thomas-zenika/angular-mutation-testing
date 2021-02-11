import { Component, Input, OnInit } from '@angular/core';
import { UpperCaseService } from '../upper-case.service';

@Component({
	selector: 'app-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

	@Input()
	title: string;

	TITLE: string;

	constructor(private upperCaseService: UpperCaseService) {
	}

	ngOnInit(): void {
		const upperCasedTitle: string = this.upperCaseService.toUpperCase(this.title);
		this.TITLE = upperCasedTitle;
	}

}
