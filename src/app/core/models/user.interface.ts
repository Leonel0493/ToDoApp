import { RolesInterface } from "./roles.interface";

export interface UserInterface{
    id:string | number;
    name:string;
    age: number;
    roles: Array<RolesInterface>;
}