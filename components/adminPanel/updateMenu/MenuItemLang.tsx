import { Box, Typography } from "@mui/material";
import { IMenu } from "../../../types/menuType";
import MenuItem from "./MenuItem";

interface IMenuItemLang {
    cardData: any,
    register: any,
    k: number
}

const MenuItemLang: React.FC<IMenuItemLang> = ({ cardData, register, k }) => {

    return (
        <>
            {cardData?.ua.body[k] && (
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
                        j={0}
                        k={k}
                    />
                    <MenuItem
                        item={cardData.ru.body[k]}
                        register={register}
                        j={1}
                        k={k}
                    />
                    <MenuItem
                        item={cardData.en.body[k]}
                        register={register}
                        j={2}
                        k={k}
                    />
                </Box>
            )}
        </>
    );
};

export default MenuItemLang;