# firebase-ionic
firebase-ionic proyecto de ejemplo con funcionalidades de autenticado y archivos de firebase y uso de spotify

# Crear proyecto: 

```
ionic start spoty-app blank --type=angular
cd ./spoty-ap
```

# Crear componentes basicos
```
ionic g page login
ionic g service services/auth --skip-tests=true
ionic g service services/avatar --skip-tests=true
```

# Instalar dependencias de Firebase

```
npm install firebase @angular/fire --save
ó
ng add @angular/fire
```

# Configurar Firebase
* environment.ts
```
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  }
};

```

* src/app/app.moule.ts
```
/**
 * Firebase imports
 */
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
		provideStorage(() => getStorage())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }

```
# Para captura de imagenes

```

npm i @capacitor/camera
npm i @ionic/pwa-elements

```