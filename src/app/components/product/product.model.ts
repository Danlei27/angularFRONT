export interface Product {
    id?: number
    name: string
    price: number
}

export interface User {
    name: string;
    date: string;
    address: string;
    cpf: string;
    telephone: string;
    email: string;
}


export interface ResponseUsers {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}


export interface ResponseCreate {
    id:  number;
    name: string;
    date: string;
    address: string;
    cpf: string;
    telephone: string;
    email: string;
}