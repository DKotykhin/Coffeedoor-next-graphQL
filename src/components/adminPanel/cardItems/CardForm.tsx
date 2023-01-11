import { FieldValues, UseFormRegister } from "react-hook-form";

import CardOneLangInputs from "./CardOneLangInputs";
import { TextInput, TextFieldInput, RadioButtonInput } from "../inputs";

import { ICard } from "types/cardType";

interface ICardForm {
    cardData: ICard;
    register: UseFormRegister<FieldValues>
}

const CardForm: React.FC<ICardForm> = ({ cardData, register }) => {
    const item_ua = cardData?.body[0];
    const item_ru = cardData?.body[1];
    const item_en = cardData?.body[2];

    return (
        <>
            <CardOneLangInputs
                item={item_ua}
                lang={"ua"}
                register={register}
            />
            <CardOneLangInputs
                item={item_ru}
                lang={"ru"}
                register={register}
            />
            <CardOneLangInputs
                item={item_en}
                lang={"en"}
                register={register}
            />

            <TextInput
                label={"Основне фото:"}
                value={cardData?.card_img}
                reg={register("card_img")}
            />
            <TextFieldInput
                label={"Детальні фото:"}
                value={cardData?.list_img.join(",\n")}
                reg={register("list_img")}
            />
            <TextInput
                label={"Вага:"}
                value={cardData?.weight}
                reg={register("weight")}
            />
            <TextInput
                label={"Ціна:"}
                value={cardData?.price}
                reg={register("price")}
            />
            <TextInput
                label={"Позиція:"}
                value={cardData?.position}
                reg={register("position")}
            />
            <RadioButtonInput
                label={"Під замовлення:"}
                value={cardData?.order}
                reg={register("order")}
            />
            <RadioButtonInput
                label={"Приховати картку:"}
                value={cardData?.hide}
                reg={register("hide")}
            />
        </>
    )
}

export default CardForm;