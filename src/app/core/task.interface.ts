import { AuthorInterface } from "./author.interface";

export interface TaskInterface{
    title:string;
    descryption:string;
    author:AuthorInterface;
}