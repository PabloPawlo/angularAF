import { Byte } from "@angular/compiler/src/util";
import { Permission } from "./permission";

export class User{
    id: number;
    userName: string;
    passwordHash: Array<Byte>;
    passwordSalt: Array<Byte>;
    permissionLevel: Permission;
}