import PermissionType from "./PermissionType";

interface DatabaseItem{
    email: string;
    password: string;
    permission: PermissionType;
}

const Database : DatabaseItem[] = [{
    email: "marcosvinibva@gmail.com",
    password: "6021023",
    permission: PermissionType.ADMIN
},{
    email: "vini_bva@hotmail.com",
    password: "Vini99#9",
    permission: PermissionType.USER
},{
    email: "marcos.s.bva@gmail.com",
    password: "07Marcos$*",
    permission: PermissionType.USER
},{
    email:"xaolinmatadordeporco@gmail.com",
    password:"12345",
    permission: PermissionType.USER
}];

export default Database;