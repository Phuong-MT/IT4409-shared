export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN",
}

export interface IUser {
    _id: string;
    role: UserRole;
    userName: string;
    password: string;
    email: string;
    phoneNumber: string;
    address: string[];
    dateOfBirth: Date;
    verifyCode: string;
}

export class User implements IUser {
    _id: string;
    role: UserRole;
    userName: string;
    password: string;
    email: string;
    phoneNumber: string;
    address: string[];
    dateOfBirth: Date;
    verifyCode: string;

    constructor(obj: Partial<IUser> = {}) {
        const {
            _id = "",
            role = UserRole.USER,
            userName = "",
            password = "",
            email = "",
            phoneNumber = "",
            address = [],
            dateOfBirth = new Date(),
            verifyCode = "",
        } = obj;

        this._id = _id;
        this.role = role;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.dateOfBirth = new Date(dateOfBirth);
        this.verifyCode = verifyCode;
    }
}
