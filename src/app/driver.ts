import { Guid } from "guid-typescript";

export interface Driver {
    id: Guid;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;

}
