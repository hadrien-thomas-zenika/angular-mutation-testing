import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LogService } from './log.service';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AppComponent],
			providers: [LogService]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
	});

	it('should bring coverage to 100%', () => {
		const logService:LogService = TestBed.inject(LogService);
		spyOn(logService, 'log');
		fixture.detectChanges();
		expect(component.title).toEqual('This is a title');
		expect(logService.log).toHaveBeenCalledWith('Init app component');
	});
});
