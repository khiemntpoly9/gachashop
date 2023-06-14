/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-slideshow',
	templateUrl: './slideshow.component.html',
	styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
	slides: any[] = new Array(4).fill({ id: -1, src: '', title: '', subtitle: '' });
	constructor() {}
	ngOnInit(): void {
		this.slides[0] = {
			src: 'assets/images/banner1.png',
		};
		this.slides[1] = {
			src: 'assets/images/banner2.png',
		};
		this.slides[2] = {
			src: 'assets/images/banner3.png',
		};
		this.slides[3] = {
			src: 'assets/images/banner4.png',
		};
	}
}
