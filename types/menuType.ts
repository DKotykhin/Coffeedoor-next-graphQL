
export interface IMenu {
    _id: string;
    ua: IItem;
    ru: IItem;
    en: IItem;        
    hide: boolean;
    position: number;
}

export interface ITitle {
    title: string
}

interface IItem {
    body: IBody[];
    title: string;
}

export interface IBody {
    // map(arg0: (item: IBody, i: number) => JSX.Element): import("react").ReactNode;
    // [x: string]: any;
    // map: any;
    // map(arg0: (item: any, i: any) => JSX.Element): import("react").ReactNode;
    name: string;
    description?: string;
    price: string
}