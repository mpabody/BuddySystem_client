export interface RegisterUser {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    currentLocation: string;
    isMale: boolean;
    age: number;
}