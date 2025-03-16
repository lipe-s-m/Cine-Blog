import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
	isEnableHamburger: boolean = false;

	setIsEnableHamburger(): void {
		this.isEnableHamburger = !this.isEnableHamburger;
	}
}
