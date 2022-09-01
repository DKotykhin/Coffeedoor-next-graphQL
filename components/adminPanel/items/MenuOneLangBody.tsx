import { Box, Paper } from "@mui/material";

import CardText from "./CardText";

interface IOneLang {
    item: {
        name: string;
        description?: string;
        price: string
    }
}

const MenuOneLangBody: React.FC<IOneLang> = ({ item }) => {
    return (
        <Paper elevation={4} sx={{ p: 2 }}>
            <CardText label={"Назва:"} value={item.name} />
            <CardText label={"Опис:"} value={item.description} />
            <CardText label={"Ціна:"} value={item.price} />
        </Paper>
    );
};

export default MenuOneLangBody;