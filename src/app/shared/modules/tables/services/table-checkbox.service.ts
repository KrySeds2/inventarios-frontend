import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableCheckboxService {
  totalItems = 0;
  private items = new Set();
  private selectAll: BehaviorSubject<boolean>;
  private selectCheckboxAll: BehaviorSubject<boolean>;
  constructor() {
    this.selectAll = new BehaviorSubject<boolean>(false);
    this.selectCheckboxAll = new BehaviorSubject<boolean>(false);
  }
  addCheckBox() {
    this.totalItems++;
  }
  setSelectAll(value: boolean): void {
    this.selectAll.next(value);
  }
  getSelectAll(): Observable<boolean> {
    return this.selectAll.asObservable();
  }
  setCheckboxAll(value: boolean): void {
    this.selectCheckboxAll.next(value);
  }
  getCheckboxAll(): Observable<boolean> {
    return this.selectCheckboxAll.asObservable();
  }
  addSelected(item: any) {
    this.items.add(item);
    if (this.items.size === this.totalItems) {
      this.setCheckboxAll(true);
    } else {
      this.setCheckboxAll(false);
    }
    console.log(this.items);
  }
  addSelectedCheckboxAll(item: any) {
    this.items.add(item);
    console.log(this.items);
  }
  deleteSelected(item: any) {
    this.items.delete(item);
    this.setCheckboxAll(false);
    console.log(this.items);
  }
}
