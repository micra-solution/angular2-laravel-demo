
export interface Register {
	name:string;
    email: string; // required, must be valid email format
    password: string; // required, value must be equal to confirm password.
    confirmpassword:string;
}