import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { dataMock } from '../../../../data/dataMock';

@Component({
	selector: 'app-big-card',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './big-card.component.html',
	styleUrls: [
		'./big-card.component.css',
		'./big-card.responsive.component.css',
	],
})
export class BigCardComponent implements OnInit {
	@Input()
	cardImage: string = '';
	@Input()
	cardTitle: string = '';
	@Input()
	cardDescription: string = '';
	@Input()
	cardData: string = '';
	@Input()
	cardLink: string = '';
	@Input()
	cardResume: string | undefined = '';
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
		this.cardResume = result.resumo;
		this.cardData = result.data;
	}
}
