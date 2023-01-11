import { INewMenu } from "types/menuType";

interface IFormData {
    [key: string]: string;
}

export const MenuData = (data: IFormData): INewMenu => {
    const body_ua = [
        {
            name: data.name_ua_0,
            description: data.desc_ua_0,
            price: data.price_ua_0,
        },
        {
            name: data.name_ua_1,
            description: data.desc_ua_1,
            price: data.price_ua_1,
        },
        {
            name: data.name_ua_2,
            description: data.desc_ua_2,
            price: data.price_ua_2,
        },
        {
            name: data.name_ua_3,
            description: data.desc_ua_3,
            price: data.price_ua_3,
        },
        {
            name: data.name_ua_4,
            description: data.desc_ua_4,
            price: data.price_ua_4,
        },
        {
            name: data.name_ua_5,
            description: data.desc_ua_5,
            price: data.price_ua_5,
        },
        {
            name: data.name_ua_6,
            description: data.desc_ua_6,
            price: data.price_ua_6,
        },
        {
            name: data.name_ua_7,
            description: data.desc_ua_7,
            price: data.price_ua_7,
        },
        {
            name: data.name_ua_8,
            description: data.desc_ua_8,
            price: data.price_ua_8,
        },
        {
            name: data.name_ua_9,
            description: data.desc_ua_9,
            price: data.price_ua_9,
        },
        {
            name: data.name_ua_99,
            description: data.desc_ua_99,
            price: data.price_ua_99,
        },
    ];
    const body_ru = [
        {
            name: data.name_ru_0,
            description: data.desc_ru_0,
            price: data.price_ru_0,
        },
        {
            name: data.name_ru_1,
            description: data.desc_ru_1,
            price: data.price_ru_1,
        },
        {
            name: data.name_ru_2,
            description: data.desc_ru_2,
            price: data.price_ru_2,
        },
        {
            name: data.name_ru_3,
            description: data.desc_ru_3,
            price: data.price_ru_3,
        },
        {
            name: data.name_ru_4,
            description: data.desc_ru_4,
            price: data.price_ru_4,
        },
        {
            name: data.name_ru_5,
            description: data.desc_ru_5,
            price: data.price_ru_5,
        },
        {
            name: data.name_ru_6,
            description: data.desc_ru_6,
            price: data.price_ru_6,
        },
        {
            name: data.name_ru_7,
            description: data.desc_ru_7,
            price: data.price_ru_7,
        },
        {
            name: data.name_ru_8,
            description: data.desc_ru_8,
            price: data.price_ru_8,
        },
        {
            name: data.name_ru_9,
            description: data.desc_ru_9,
            price: data.price_ru_9,
        },
        {
            name: data.name_ru_99,
            description: data.desc_ru_99,
            price: data.price_ru_99,
        },
    ];
    const body_en = [
        {
            name: data.name_en_0,
            description: data.desc_en_0,
            price: data.price_en_0,
        },
        {
            name: data.name_en_1,
            description: data.desc_en_1,
            price: data.price_en_1,
        },
        {
            name: data.name_en_2,
            description: data.desc_en_2,
            price: data.price_en_2,
        },
        {
            name: data.name_en_3,
            description: data.desc_en_3,
            price: data.price_en_3,
        },
        {
            name: data.name_en_4,
            description: data.desc_en_4,
            price: data.price_en_4,
        },
        {
            name: data.name_en_5,
            description: data.desc_en_5,
            price: data.price_en_5,
        },
        {
            name: data.name_en_6,
            description: data.desc_en_6,
            price: data.price_en_6,
        },
        {
            name: data.name_en_7,
            description: data.desc_en_7,
            price: data.price_en_7,
        },
        {
            name: data.name_en_8,
            description: data.desc_en_8,
            price: data.price_en_8,
        },
        {
            name: data.name_en_9,
            description: data.desc_en_9,
            price: data.price_en_9,
        },
        {
            name: data.name_en_99,
            description: data.desc_en_99,
            price: data.price_en_99,
        },
    ];
    const newFormData = {
        ua: {
            title: data.title_ua,
            body: body_ua.filter((item) => (item.name !== undefined && item.name !== "")),
        },
        ru: {
            title: data.title_ru,
            body: body_ru.filter((item) => (item.name !== undefined && item.name !== "")),
        },
        en: {
            title: data.title_en,
            body: body_en.filter((item) => (item.name !== undefined && item.name !== "")),
        },
        hide: data.hide === "true",
        ...(data.position && { position: +data.position }),
    };
        
    return newFormData;
};
