import { useRouter } from "next/router";

import { Container, Button, Box } from "@mui/material";

import { CardText } from "./cardItems";
import { MenuOneLangBody, MenuOneLangTitle } from "./menuItems";

import { IMenu } from "../../types/menuType";

interface IMenuCard {
    item: IMenu
}

const AdminMenu: React.FC<IMenuCard> = ({ item }) => {
    const router = useRouter();

    const editorClick = (id: string) => {
        router.push(`/adminpanel/${id}`);
    };

    return (
        <Container sx={{ my: 2, border: "solid 2px #898989", borderRadius: 5 }}>
            <MenuOneLangTitle title={item.ua.title} />
            {item.ua.body?.map((item, i) => (
                <Box key={i} sx={{ my: 1 }}>
                    <MenuOneLangBody item={item} />
                </Box>
            ))}
            <MenuOneLangTitle title={item.ru.title} />
            {item.ru.body?.map((item, i) => (
                <Box key={i} sx={{ my: 1 }}>
                    <MenuOneLangBody item={item} />
                </Box>
            ))}
            <MenuOneLangTitle title={item.en.title} />
            {item.en.body?.map((item, i) => (
                <Box key={i} sx={{ my: 1 }}>
                    <MenuOneLangBody item={item} />
                </Box>
            ))}

            <CardText
                label={"Приховати картку:"}
                value={item.hide ? "Так" : "Ні"}
            />
            {item.position && (
                <CardText label={"Позиція:"} value={item.position} />
            )}
            <Button sx={{ m: 2 }} onClick={() => editorClick(item._id)}>
                Редагувати
            </Button>
        </Container>
    );
};

export default AdminMenu;
