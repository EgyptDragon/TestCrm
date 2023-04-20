export interface School {
    id: number;
    numero: string;
    isPrivate: boolean;
    denomination: string;
    patronym: string;
    cycle: string;
}

export interface SchoolDetails extends School {
    nature?: string;
    country?: string;
    academy?: string;
    mention?: string;
    address?: string;
    lieuDit?: string;
    boitePostale?: string;
    codePostal?: string;
    locality?: string;
    numeroS?: string;
    phoneNumber?: string;
    fax?: string;
    mail?: string;
    departement?: number;
    coordX?: number;
    coordY?: number;
    displayedName?: string;
}