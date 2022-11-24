import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';
import { SpotifyService } from '../services/spotify.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss']
})
export class HomePage {
	profile = null;
	featuredPlaylists;
	constructor(
		private authService: AuthService,
		private router: Router,
		private spotifyService: SpotifyService
	) {
		this.getPlayList();
	}

	async getPlayList(){
		this.featuredPlaylists =  await this.spotifyService.getPlayList();
		console.log(this.featuredPlaylists);
	}

	viewDetail(playlist){
		console.log('element clicked');
		this.router.navigate(['/detail'], {queryParams: {data: JSON.stringify(playlist)}} );
	}
}
