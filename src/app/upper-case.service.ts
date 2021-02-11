import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UpperCaseService {

	constructor() {
	}

	toUpperCase(aString: string): string {
		return "THIS IS A TITLE";
	}
}
