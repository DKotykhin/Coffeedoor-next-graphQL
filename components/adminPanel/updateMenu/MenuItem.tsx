import { Box, Paper } from "@mui/material";
import { IBody, IMenu } from "../../../types/menuType";

import TextInput from "../inputs/TextInput";

interface IMenuItem {
    item: IBody;
    register: any;
    j: number;
    k: number
}

const MenuItem: React.FC<IMenuItem> = ({ item, register, j, k }) => {
    
    return (
        <Box sx={{ my: 1 }}>
            <Paper elevation={4} sx={{ p: 1 }}>
                <TextInput
                    label={"Напій:"}
                    value={item?.name}
                    reg={register(`name${j}${k}`)}
                />
                <TextInput
                    label={"Опис:"}
                    value={item?.description}
                    reg={register(`desc${j}${k}`)}
                />
                <TextInput
                    label={"Ціна:"}
                    value={item?.price}
                    reg={register(`price${j}${k}`)}
                />
            </Paper>
        </Box>
    );
};

export default MenuItem;
