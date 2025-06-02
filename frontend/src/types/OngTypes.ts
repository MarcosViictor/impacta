export interface OngTypes {
    avaliations: string[]
    avarage_rating: number;
    donations: string[];
    description: string;
    faqs: string[];
    id: number;
    name: string;
    necessities: string[];
    posts: string[];
    total_donations: number;
    user: OngDetailsTypes
}

export interface OngDetailsTypes {
    address: string;
    city: string;
    email: string;
    first_name: string;
    last_name: string;
    id: number;
    postal_code: string;
    state: string;
    username: string;
}

type urgencyType = 'baixa' | 'media' | 'alta';

export interface ItemOngTypes {
    id?: number
    item: number
    quantity: number
    urgency: urgencyType
    status: string
    name: string;
    category: string;
}