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
		private avatarService: AvatarService,
		private authService: AuthService,
		private router: Router,
		private loadingController: LoadingController,
		private alertController: AlertController,
		private spotifyService: SpotifyService
	) {
		this.getPlayList();
	}

	async logout() {
		await this.authService.logout();
		this.router.navigateByUrl('/', { replaceUrl: true });
	}

	async getPlayList(){
		this.featuredPlaylists =  await this.spotifyService.getPlayList();
		console.log(this.featuredPlaylists);
	}

	async changeImage() {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: false,
			resultType: CameraResultType.Base64,
			source: CameraSource.Photos // Camera, Photos or Prompt!
		});

		if (image) {
			const loading = await this.loadingController.create();
			await loading.present();

			const result = await this.avatarService.uploadImage(image);
			loading.dismiss();

			if (!result) {
				const alert = await this.alertController.create({
					header: 'Upload failed',
					message: 'There was a problem uploading your avatar.',
					buttons: ['OK']
				});
				await alert.present();
			}
		}
	}
	viewDetail(playlist){
		console.log('element clicked');
		this.router.navigate(['/detail'], {queryParams: {data: JSON.stringify(playlist)}} );
	}
}
