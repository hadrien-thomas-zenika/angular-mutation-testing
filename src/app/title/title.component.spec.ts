import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';
import { UpperCaseService } from '../upper-case.service';

describe('TitleComponent', () => {
	let component: TitleComponent;
	let fixture: ComponentFixture<TitleComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TitleComponent],
			providers: [UpperCaseService]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TitleComponent);
		component = fixture.componentInstance;
	});

	it('should call', () => {
		const upperCaseService: UpperCaseService = TestBed.inject(UpperCaseService);
		spyOn(upperCaseService, 'toUpperCase').and.returnValue('TITLE');
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('p').innerText.trim()).toBe('TITLE');
	});

});
