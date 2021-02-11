import { TestBed } from '@angular/core/testing';
import { UpperCaseService } from './upper-case.service';


describe('UpperCaseService', () => {
	let service: UpperCaseService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(UpperCaseService);
	});

	it('should bring coverage to 100%', () => {
		const upperCasedString: string = service.toUpperCase(null);
		expect(upperCasedString).toBe('THIS IS A TITLE');
	});
});
