import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { MenuBarComponent } from './pages/home/components/menu-bar/menu-bar.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HomeComponent, MenuBarComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'Cine-Blog';
}
