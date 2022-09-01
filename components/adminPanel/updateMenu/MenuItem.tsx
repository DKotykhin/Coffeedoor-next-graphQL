import { Box, Paper } from "@mui/material";
import { IBody, IMenu } from "../../../types/menuType";

import InputItem from "../inputs/InputItem";

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
                <InputItem
                    label={"Напій:"}
                    value={item?.name}
                    reg={register(`name${j}${k}`)}
                />
                <InputItem
                    label={"Опис:"}
                    value={item?.description}
                    reg={register(`desc${j}${k}`)}
                />
                <InputItem
                    label={"Ціна:"}
                    value={item?.price}
                    reg={register(`price${j}${k}`)}
                />
            </Paper>
        </Box>
    );
};

export default MenuItem;
