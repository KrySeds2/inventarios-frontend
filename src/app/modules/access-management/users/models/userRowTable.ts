import { TableRow } from "@shared/modules/tables/models/tableRow";


export interface UserRowTable extends TableRow {
    // email: string;
    username: string;
    profile: string;
    status?: boolean;
    id: string;
}
