export interface SessionResponse {
    data: Data;
    success: boolean;
    errors?: (null)[] | null;
}

export interface Data {
    csrfToken: string;
    user: User;
    cart: Object;
}

export interface User {
    firstName: string;
    serverUTC: string;
    optIn: boolean;
    militaryVerified: boolean;
    loyaltyStatus: boolean;
    ssoComplete: boolean;
    vipUser: boolean;
    authenticated: boolean;
    loyalty: boolean;
    recognized: boolean;
    vip: boolean;
}