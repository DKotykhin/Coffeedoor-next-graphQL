import { FieldValues, UseFormRegister } from "react-hook-form";

import { Box, Paper, Typography } from "@mui/material";

import { TextInput, TextFieldInput, SortFieldInput } from "../inputs";

import { IBody } from "types/cardType";
interface ICardLang {
    item: IBody;
    lang: string;
    register: UseFormRegister<FieldValues>
}

const UpdateCardLang: React.FC<ICardLang> = ({ item, lang, register }) => {
    return (
        <Box sx={{ mb: 3 }}>
            <Paper elevation={12} sx={{ p: 3 }}>
                <Typography sx={{ textAlign: "center" }}>
                    {"Мова: "}
                    {lang}
                </Typography>
                <TextInput
                    label={"Назва групи:"}
                    value={item?.title}
                    reg={register(`title_${lang}`)}
                />
                <TextInput
                    label={"Назва товару:"}
                    value={item?.name}
                    reg={register(`name_${lang}`)}
                />
                <TextFieldInput
                    label={"Опис:"}
                    value={item?.description}
                    reg={register(`description_${lang}`)}
                />               
                <SortFieldInput
                    label={"Вид:"}
                    value_1={item?.sort?.key}
                    value_2={item?.sort?.value}
                    reg_1={register(`sort_${lang}_key`)}
                    reg_2={register(`sort_${lang}_value`)}
                />
                <TextInput
                    label={"Виробник:"}
                    value={item?.tm}
                    reg={register(`tm_${lang}`)}
                />
                <TextInput
                    label={"Країна:"}
                    value={item?.country}
                    reg={register(`country_${lang}`)}
                />
                <TextFieldInput
                    label={"Текст 1:"}
                    value={item?.additional_text_1?.join("\n")}
                    reg={register(`additional_text_1_${lang}`)}
                />
                <TextFieldInput
                    label={"Список:"}
                    value={item?.additional_list?.join("\n")}
                    reg={register(`additional_list_${lang}`)}
                />
                <TextFieldInput
                    label={"Текст 2:"}
                    value={item?.additional_text_2?.join("\n")}
                    reg={register(`additional_text_2_${lang}`)}
                />
            </Paper>
        </Box>
    );
};

export default UpdateCardLang;
