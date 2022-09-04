import { FieldValues, UseFormRegister } from "react-hook-form";

import { Box, Typography, Paper } from "@mui/material";

import TextInput from "../inputs/TextInput";

interface IMenuItemNew {
    register: UseFormRegister<FieldValues>,
    k: number
}

const MenuAddNewItem: React.FC<IMenuItemNew> = ({ register, k }) => {
    return (
        <Box
            sx={{
                border: "solid 2px #898989",
                borderRadius: "10px",
                p: 2,
                mb: 2,
            }}
        >
            <Typography sx={{ textAlign: "center" }}>
                {"Новий напій"}
            </Typography>
            <Box sx={{ my: 1 }}>
                <Paper elevation={4} sx={{ p: 1 }}>
                    <TextInput label={"Напій:"} reg={register(`name0${k}`)} />
                    <TextInput label={"Опис:"} reg={register(`desc0${k}`)} />
                    <TextInput label={"Ціна:"} reg={register(`price0${k}`)} />
                </Paper>
            </Box>
            <Box sx={{ my: 1 }}>
                <Paper elevation={4} sx={{ p: 1 }}>
                    <TextInput label={"Напій:"} reg={register(`name1${k}`)} />
                    <TextInput label={"Опис:"} reg={register(`desc1${k}`)} />
                    <TextInput label={"Ціна:"} reg={register(`price1${k}`)} />
                </Paper>
            </Box>
            <Box sx={{ my: 1 }}>
                <Paper elevation={4} sx={{ p: 1 }}>
                    <TextInput label={"Напій:"} reg={register(`name2${k}`)} />
                    <TextInput label={"Опис:"} reg={register(`desc2${k}`)} />
                    <TextInput label={"Ціна:"} reg={register(`price2${k}`)} />
                </Paper>
            </Box>
        </Box>
    );
};

export default MenuAddNewItem;
