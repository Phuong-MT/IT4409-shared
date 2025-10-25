export class Contacts {
    static AUTH_PATH = "api/auth";
    static API_CONFIG = {
        AUTH: {
            LOGIN: `${Contacts.AUTH_PATH}/login`,
            REGISTER: `${Contacts.AUTH_PATH}/register`,
            LOGOUT: `${Contacts.AUTH_PATH}/logout`,
            REFRESH_TOKEN: `${Contacts.AUTH_PATH}/refresh-token`,
        },
    };
    static Status = {
        HIDE: 1,
        PUBLIC: 9,
        CREATE: 2,
    } as const;
    static Rate = {
        ONE: 1,
        TOW: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
    } as const;
}
