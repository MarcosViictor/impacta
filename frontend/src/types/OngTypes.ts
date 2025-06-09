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
    name: string
    category: string;
    quantity: number;
}

export interface OngNecessitiesTypes {
    id?: number;
    item: number
    quantity: number
    urgency: urgencyType
    status: string


}

export interface OngNecessitiesResponseTypes {
    id?: number;
    item?: ItemOngTypes;
    item_name?: string;
    org?: number;
    org_name?: string;
    quantity?: number;
    urgency?: urgencyType;
    status?: string;
    created_at?: string;
}

export interface OngItemsResponseTypes {
    id: number;
    name: string;
    category: string;
    quantity: number;
}