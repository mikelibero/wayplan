
export interface Attributes2 {
    url: string;
    alternativeText?: any;
}

export interface Data3 {
    attributes: Attributes2;
}

export interface Image {
    data: Data3;
}

export interface Logo {
    image: Image;
}

export interface Attributes {
    logo: Logo;
    frase: String;
}

export interface Data2 {
    attributes: Attributes;
}

export interface Footer {
    data: Data2;
}

export interface Data {
    footer: Footer;
}

export interface RootObjectFooter {
    data: Data;
}


