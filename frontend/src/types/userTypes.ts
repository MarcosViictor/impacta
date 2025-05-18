export interface userTypes {
    email: string, 
    username: string, 
    password: string, 
    password2: string,
    user_type: string 
}

export interface userLogin {
    email: string, 
    password: string
}

export interface ongTypes {
    name: string;
    email: string;
    password: string;
    password2: string;
    short_description?: string;
    full_description?: string;
    street?: string;
    number?: string;
    complement?: string;
    district?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    phone?: string;
    website?: string;
    responsible_name?: string;
    responsible_role?: string;
    responsible_cpf?: string;
    responsible_phone?: string;
    responsible_email?: string;
    user_type?: string;
}