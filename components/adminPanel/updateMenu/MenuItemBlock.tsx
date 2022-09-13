import { FieldValues, UseFormRegister } from "react-hook-form";

import { Box, Typography } from "@mui/material";

import MenuItem from "./MenuItem";
import { IMenu } from "../../../types/menuType";

interface IMenuItemLang {
    cardData: IMenu,
    register: UseFormRegister<FieldValues>,
    k: number
}

const MenuItemBlock: React.FC<IMenuItemLang> = ({ cardData, register, k }) => {

    return (
        <>
            <Box
                sx={{
                    border: "solid 2px #898989",
                    borderRadius: "10px",
                    p: 2,
                    mb: 2,
                }}
            >
                <Typography sx={{ textAlign: "center" }}>
                    {"Напій №: "}
                    {k + 1}
                </Typography>
                <MenuItem
                    item={cardData.ua.body[k]}
                    register={register}
                    j={'ua'}
                    k={k}
                />
                <MenuItem
                    item={cardData.ru.body[k]}
                    register={register}
                    j={'ru'}
                    k={k}
                />
                <MenuItem
                    item={cardData.en.body[k]}
                    register={register}
                    j={'en'}
                    k={k}
                />
            </Box>
        </>
    );
};

export default MenuItemBlock;
