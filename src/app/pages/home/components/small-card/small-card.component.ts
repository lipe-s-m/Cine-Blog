import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { dataMock } from '../../../../data/dataMock';

@Component({
	selector: 'app-small-card',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './small-card.component.html',
	styleUrls: [
		'./small-card.component.css',
		'./small-card.responsive.component.css',
	],
})
export class SmallCardComponent implements OnInit {
	@Input()
	cardImage: string = '';
	@Input()
	cardTitle: string = '';
	// @Input()
	cardDescription: string = '';
	@Input()
	cardData: string = '';
	@Input()
	cardLink: string = '';
	@Input()
	id: string = '';

	ngOnInit(): void {
		this.setValueAsComponent(this.id);
	}

	setValueAsComponent(id: string): void {
		const response = dataMock.filter((article) => {
			return article.id === id;
		});
		const result = response[0];
		console.log(result);

		this.cardImage = result.image;
		this.cardTitle = result.title;
		this.cardDescription = result.description;
		this.cardData = result.data;
	}
}
