import { Injectable } from '@angular/core';
import * as CryptoJs from 'crypto-js';
/**
 * Encrypt and Drecript Service
 *
 * @export
 * @class EncrDecrServiceService
 */
@Injectable({
  providedIn: 'root'
})
export class EncrDecrServiceService {
  private secretKey!: string;
  /**
   *Creates an instance of EncrDecrServiceService.
   * @memberof EncrDecrServiceService
   */
  constructor() { }

  set(keys, value){
    let key = CryptoJs.enc.Utf8.parse(keys);
    let iv = CryptoJs.enc.Utf8.parse(keys);
    let encrypted = CryptoJs.AES.encrypt(CryptoJs.enc.Utf8.parse(value.toString()), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJs.mode.CBC,
        padding: CryptoJs.pad.Pkcs7
    });

    return encrypted.toString();
  }

  get(keys, value){
    let key = CryptoJs.enc.Utf8.parse(keys);
    let iv = CryptoJs.enc.Utf8.parse(keys);
    let decrypted = CryptoJs.AES.decrypt(value, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJs.mode.CBC,
        padding: CryptoJs.pad.Pkcs7
    });

    return decrypted.toString(CryptoJs.enc.Utf8);
  }
  encrypt(data: string){
    return CryptoJs.AES.encrypt(data, this.secretKey).toString();
  }


}
