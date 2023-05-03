import { Component, ContentChild, TemplateRef, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { BodyDirective } from '../directives/body.directive';
import { CaptionDirective } from '../directives/caption.directive';
import { ColGroupDirective } from '../directives/colGroup.directive';
import { HeaderDirective } from '../directives/header.directive';
import { TableCheckboxService } from './services/table-checkbox.service';
import * as XLSX from "xlsx-js-style";
@Component({
  selector: 'app-table',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  styles: [`
  :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
  }

  .layout-news-active :host ::ng-deep .p-datatable tr > th {
      top: 0;
  }

  @media screen and (max-width: 64em) {
      :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
          top: 0;
      }

      .layout-news-active :host ::ng-deep .p-datatable tr > th {
          top: 0;
      }
  }
`]
})
export class TableComponent {
  libraryTranslate = 'tableComponent.';
  @ContentChild(CaptionDirective, { read: TemplateRef }) captionTemplate: any;
  @ContentChild(ColGroupDirective, { read: TemplateRef }) colGroupTemplate: any;
  @ContentChild(HeaderDirective, { read: TemplateRef }) headerTemplate: any;
  @ContentChild(BodyDirective, { read: TemplateRef }) bodyTemplate: any;
  @ViewChild('dt') tableComponent!: Table;
  numberColsValue: any;
  colsArray = new Array();
  @Input() filter = false;
  @Input() loading = false;
  @Input() widthCol = '100px';
  @Input() columns!: any[];
  @Input() exportFilename: string = "tabla";
  @Input() values!: any[];
  @Input() paginator = true;
  @Input() rowsPerPageOptions: number[] = [10, 20, 50, 100];
  @Input() currentPageReportTemplate = '';
  @Input() filterDelay: number = NaN;
  @Input() globalFilterFields!: any[];
  @Input() showCurrentPageReport = false;
  @Input() rowHover = false;
  @Input() resizableColumns = true;
  @Input() scrollable = true;
  @Input() dataKey!: string;
  @Input() rows = 10;
  @Input() scrollHeight = '600px';
  selectionValue: any;
  _valueGlobalFilter = '';
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();

  constructor(private checkboxSV: TableCheckboxService) {

  }

  exportXLSX() {
    // FILTRAR COLUMNAS
    let filterHeader = this.columns.filter(row => row.exportable !== false);
    // ORGANIZAR DATOS
    let filterData = this.values.map(row => {
      let data: any = {};
      for (let column of filterHeader) {
        data[column.field] = row[column.field];
      }
      return data;
    });

    // INJECTAR DATOS;
    const worksheet = XLSX.utils.json_to_sheet(filterData);
    // AJUSTAR NOMBRES DE COLUMNAS
    XLSX.utils.sheet_add_aoa(worksheet, [filterHeader.map(row => row.header)], { origin: "A1" });
    // ajustar tamaño de columnas
    worksheet["!cols"] = filterHeader.map(row => {
      return {
        wch: (row.widthCaracterXLSX) ? row.widthCaracterXLSX : this.getSizes(filterData, row.field)
      }
    });
    this.getNameCell(0,5);
    // crear objeto Excel
    const workbook = XLSX.utils.book_new();
    // agregar datos a excel
    XLSX.utils.book_append_sheet(workbook, worksheet);
    // exportar
    XLSX.writeFile(workbook, this.exportFilename + ".xlsx", { compression: true });

  }
  getNameCell(min: number,max: number){
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let array = [];
    for(let i = min; i < max; i++){
      console.log(letters.charAt(i) + 1);
    }
  }
  getSizes(filterData: any[], column: string) {
    let max = filterData.reduce((previousValue, currentValue) => {
      return String(currentValue[column]).length > previousValue ? String(currentValue[column]).length : previousValue
    }, 0);
    if (max > 30) {
      return 30;
    }
    if (max < 5) {
      return 5;
    }
    return max;
  }
  setInputGlobal(value: any) {
    this._valueGlobalFilter = value.target.value;
    this.setFilterGlobal();
  }
  setFilterGlobal() {
    this.tableComponent.filterGlobal(this._valueGlobalFilter, 'contains');
  }
  @Input()
  get selection() {
    return this.selectionValue;
  }
  set selection(val) {
    this.selectionValue = val;
    this.selectionChange.emit(this.selectionValue);
  }
  @Input()
  get numberCols(): number {
    return this.numberColsValue;
  }
  set numberCols(val: number) {
    console.log('cantidad de columnas = ', val);
    this.numberColsValue = val;
    this.colsArray = new Array(val);
  }
}
