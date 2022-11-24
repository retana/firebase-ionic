import { Component, OnInit } from '@angular/core';
import { docData, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { doc, setDoc } from 'firebase/firestore';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  document: any = {nombre: 'NFT1', descripcion: 'DESCRIPCION1', precio: '10'};
  constructor(
    private fireStore: Firestore,
    private router: Router) { }

  ngOnInit() {
  }

  saveNFT(){
    const myId = uuid.v4();
    const nftDocRef = doc(this.fireStore, `nfts/`+myId);
    setDoc(nftDocRef, this.document);
    this.router.navigate(['/nft']);
  }

}
