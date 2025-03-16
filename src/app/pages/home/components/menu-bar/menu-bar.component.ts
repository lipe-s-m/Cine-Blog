import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuBarService } from './menu-bar.service';

@Component({
	selector: 'app-menu-bar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './menu-bar.component.html',
	styleUrls: [
		'./menu-bar.component.css',
		'./menu-bar.responsive.component.css',
	],
})
export class MenuBarComponent {
	isEnableSideBar: boolean = false;

	constructor(private menuBarService: MenuBarService) {}

	setOpenSideBar(): void {
		this.isEnableSideBar = true;
		this.menuBarService.openSideBar();
	}
	setCloseSideBar(): void {
		this.isEnableSideBar = false;
		this.menuBarService.closeSideBar();
	}
}
