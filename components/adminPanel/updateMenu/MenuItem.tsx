import { FieldValues, UseFormRegister } from "react-hook-form";

import { Box, Paper } from "@mui/material";
import { IBody } from "../../../types/menuType";

import TextInput from "../inputs/TextInput";

interface IMenuItem {
    item: IBody;
    register: UseFormRegister<FieldValues>;
    j: string;
    k: number
}

const MenuItem: React.FC<IMenuItem> = ({ item, register, j, k }) => {
    
    return (
        <Box sx={{ my: 1 }}>
            <Paper elevation={4} sx={{ p: 1 }}>
                <TextInput
                    label={"Напій:"}
                    value={item?.name}
                    reg={register(`name_${j}_${k}`)}
                />
                <TextInput
                    label={"Опис:"}
                    value={item?.description}
                    reg={register(`desc_${j}_${k}`)}
                />
                <TextInput
                    label={"Ціна:"}
                    value={item?.price}
                    reg={register(`price_${j}_${k}`)}
                />
            </Paper>
        </Box>
    );
};

export default MenuItem;
