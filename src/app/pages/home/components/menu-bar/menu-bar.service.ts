import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class MenuBarService {
	constructor() {}

	private isEnableSideBar = new BehaviorSubject<boolean>(false);
	public isEnableSideBar$ = this.isEnableSideBar.asObservable();

	openSideBar() {
		this.isEnableSideBar.next(true);
	}

	closeSideBar() {
		this.isEnableSideBar.next(false);
		console.log('to aw');
	}
}
