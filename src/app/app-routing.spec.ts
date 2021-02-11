import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './routes';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('AppRouting', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes(routes)
			],
		});
	});

	it('should have an initial navigation to root path', fakeAsync(() => {
		const router: Router = TestBed.inject<Router>(Router);
		const location: Location = TestBed.inject<Location>(Location);

		router.initialNavigation();
		tick();
		const initialPath: string = location.path();
		expect(initialPath).toEqual('/');
	}));

	it('should not route to anything because we have no route', fakeAsync(() => {
		const router: Router = TestBed.inject<Router>(Router);
		const location: Location = TestBed.inject<Location>(Location);

		router.navigate(['/notapath']).catch(() => {
			// we expect to pass here
			expect().nothing();
		});
		tick();
		const pathAfterAnyNavigation: string = location.path();
		expect(pathAfterAnyNavigation).toEqual('/');
	}));
});
