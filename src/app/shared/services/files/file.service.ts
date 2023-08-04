import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpService) { }

  imageCreate(file:FormData) {
    return this.http.post('/files/images',file);
  }
  imageUpdate(file:FormData, id: string ) {
    return this.http.put('/files/images/'+id,file);
  }
  imageSave(file:FormData, id: string = '' ) {
    console.log(id);
    if(id && id !== null){
      return this.imageUpdate(file, id)
    }
    return this.imageCreate(file);

  }

}
