export interface TableHead<T> {
  field: keyof T;
  header?: string;
  translate?: string;
  width?: string;
  maxWidth?: string;
  medWidth?: string;
  align?: 'left' | 'right' | 'center';
  order?: boolean;
  sort?: 'ASC' | 'DSC';
  filter?: boolean;
  type?: 'text' | 'date' | 'numeric';
  permit?: 'write' | 'read';
  customPermit?: {customPermitName: string, moduleName: string};
  specificPermit?: string;
  exportable?: boolean;
  custom?: boolean;
  position?: number;
  frozen?: boolean;
  cellClass?: any;
}
