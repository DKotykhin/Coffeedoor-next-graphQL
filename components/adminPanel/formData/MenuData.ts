import { INewMenu } from "../../../types/menuType";

interface IFormData {
    [key: string]: string;
}

export const MenuData = (data: IFormData): INewMenu => {
    const body_ua = [
        {
            name: data.name00,
            description: data.desc00,
            price: data.price00,
        },
        {
            name: data.name01,
            description: data.desc01,
            price: data.price01,
        },
        {
            name: data.name02,
            description: data.desc02,
            price: data.price02,
        },
        {
            name: data.name03,
            description: data.desc03,
            price: data.price03,
        },
        {
            name: data.name04,
            description: data.desc04,
            price: data.price04,
        },
        {
            name: data.name05,
            description: data.desc05,
            price: data.price05,
        },
        {
            name: data.name06,
            description: data.desc06,
            price: data.price06,
        },
        {
            name: data.name07,
            description: data.desc07,
            price: data.price07,
        },
        {
            name: data.name08,
            description: data.desc08,
            price: data.price08,
        },
        {
            name: data.name09,
            description: data.desc09,
            price: data.price09,
        },
        {
            name: data.name099,
            description: data.desc099,
            price: data.price099,
        },
    ];
    const body_ru = [
        {
            name: data.name10,
            description: data.desc10,
            price: data.price10,
        },
        {
            name: data.name11,
            description: data.desc11,
            price: data.price11,
        },
        {
            name: data.name12,
            description: data.desc12,
            price: data.price12,
        },
        {
            name: data.name13,
            description: data.desc13,
            price: data.price13,
        },
        {
            name: data.name14,
            description: data.desc14,
            price: data.price14,
        },
        {
            name: data.name15,
            description: data.desc15,
            price: data.price15,
        },
        {
            name: data.name16,
            description: data.desc16,
            price: data.price16,
        },
        {
            name: data.name17,
            description: data.desc17,
            price: data.price17,
        },
        {
            name: data.name18,
            description: data.desc18,
            price: data.price18,
        },
        {
            name: data.name19,
            description: data.desc19,
            price: data.price19,
        },
        {
            name: data.name199,
            description: data.desc199,
            price: data.price199,
        },
    ];
    const body_en = [
        {
            name: data.name20,
            description: data.desc20,
            price: data.price20,
        },
        {
            name: data.name21,
            description: data.desc21,
            price: data.price21,
        },
        {
            name: data.name22,
            description: data.desc22,
            price: data.price22,
        },
        {
            name: data.name23,
            description: data.desc23,
            price: data.price23,
        },
        {
            name: data.name24,
            description: data.desc24,
            price: data.price24,
        },
        {
            name: data.name25,
            description: data.desc25,
            price: data.price25,
        },
        {
            name: data.name26,
            description: data.desc26,
            price: data.price26,
        },
        {
            name: data.name27,
            description: data.desc27,
            price: data.price27,
        },
        {
            name: data.name28,
            description: data.desc28,
            price: data.price28,
        },
        {
            name: data.name29,
            description: data.desc29,
            price: data.price29,
        },
        {
            name: data.name299,
            description: data.desc299,
            price: data.price299,
        },
    ];
    const newFormData = {
        ua: {
            title: data.title_ua,
            body: body_ua.filter((item) => item.name !== undefined),
        },
        ru: {
            title: data.title_ru,
            body: body_ru.filter((item) => item.name !== undefined),
        },
        en: {
            title: data.title_en,
            body: body_en.filter((item) => item.name !== undefined),
        },
        hide: data.hide === "true",
        ...(data.position && { position: +data.position }),
    };
    // console.log(newData)
    return newFormData;
};
