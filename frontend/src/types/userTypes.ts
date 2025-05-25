export interface User {
    email: string, 
    username: string, 
    password: string, 
    password2: string,
    user_type: string
    first_name?: string;
    last_name?: string; 
    address?: string;
    city?: string;
    state?: string;
    postal_code?: string;
}

export interface UserLogin {
    email: string, 
    password: string
}

export interface OngTypes extends User {
    ong_name: string;
    ong_description: string;
}