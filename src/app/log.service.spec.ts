import { TestBed } from '@angular/core/testing';

import { LogService } from './log.service';

describe('LogServiceService', () => {
	let service: LogService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(LogService);
	});

	it('should bring coverage to 100%', () => {
		spyOn(console, 'log');

		service.log('test');

		expect(console.log).toHaveBeenCalledWith('test');
	});
});
