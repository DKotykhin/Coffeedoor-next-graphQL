import { useRouter } from "next/router";

import { Container, Typography, Box, Button } from "@mui/material";

import { CardText, CardOneLangBlock } from "./cardItems";

import { ICard } from "../../types/cardType";

interface IAdminCard {
    item: ICard
}

const AdminCard: React.FC<IAdminCard> = ({ item }) => {
    const router = useRouter();

    const editorClick = (id: string) => {
        router.push(`/adminpanel/${id}`);
    };

    return (
        <Container sx={{ my: 2, border: "solid 2px #898989", borderRadius: 5 }}>
            {item.body.map((item, i) => (
                <CardOneLangBlock key={i} item={item} />
            ))}
            <Box>
                <Typography component="span" variant="body2">
                    {"Основне фото: "}
                </Typography>
                <Typography sx={{ ml: 3 }}>{item.card_img}</Typography>
            </Box>
            <Box>
                <Typography component="span" variant="body2">
                    {"Детальні фото: "}
                </Typography>
                {item.list_img?.map((item, i) => (
                    <Typography key={i} sx={{ ml: 3 }}>
                        {item}
                    </Typography>
                ))}
            </Box>
            {item.weight && <CardText label={"Вага:"} value={item.weight} />}
            <CardText label={"Ціна:"} value={item.price} />
            {!!item.position && (
                <CardText label={"Позиція:"} value={item.position} />
            )}
            <CardText
                label={"Під замовлення:"}
                value={item.order ? "Так" : "Ні"}
            />
            <CardText
                label={"Приховати картку:"}
                value={item.hide ? "Так" : "Ні"}
            />
            <Button sx={{ m: 2 }} onClick={() => editorClick(item._id)}>
                Редагувати
            </Button>
        </Container>
    );
};

export default AdminCard;
