import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()





export class LoginServices {
    constructor(   private firestore: AngularFirestore   ) {}
    createCoffeeOrder(data) {
    return new Promise<any>((resolve, reject) =>{
        var user = {name:data.displayName, id:data.uid, email:data.email};
        this.firestore
            .collection("Users")
            .add(user)
            .then(res => {}, err => reject(err));
    });
}
    }