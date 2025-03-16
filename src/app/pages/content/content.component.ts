import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataMock } from '../../data/dataMock';

@Component({
	selector: 'app-content',
	standalone: true,
	imports: [RouterModule],
	templateUrl: './content.component.html',
	styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
	@Input()
	cardImage: string = '';
	@Input()
	cardTitle: string = '';
	@Input()
	cardDescription: string = ``;
	@Input()
	cardData: string = '';

	private id: string | null = '';

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((value) => {
			this.id = value.get('id');
		});
		this.setValuesToComponent(this.id);
	}
	setValuesToComponent(id: string | null): void {
		const response = dataMock.filter((article) => {
			return article.id === id;
		});
		const result = response[0];
		this.cardImage = result.image;
		this.cardTitle = result.title;
		this.cardDescription = result.description;
		this.cardData = result.data;
	}
}
