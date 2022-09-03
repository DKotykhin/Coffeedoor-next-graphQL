import { useRouter } from "next/router";

import { Container, Button, Box } from "@mui/material";

import CardText from "./cardItems/CardText";
import MenuOneLangTitle from "./menuItems/MenuOneLangTitle";
import MenuOneLangBody from "./menuItems/MenuOneLangBody";

import { IMenu } from "../../types/menuType";

interface IMenuCard {
    props: IMenu
}

const AdminMenu: React.FC<IMenuCard> = ({ props }) => {
    const router = useRouter(); 
    
    const editorClick = () => {
        router.push(`/adminpanel/${props._id}`);
    };

    return (
        <Container sx={{ my: 2, border: "solid 2px #898989", borderRadius: 5 }}>            
            <MenuOneLangTitle title={props.ua.title}/>
            {props.ua.body?.map((item, i) => (
                <Box key={i} sx={{ my: 1 }}>
                    <MenuOneLangBody item={item} />
                </Box>
            ))}           
            <MenuOneLangTitle title={props.en.title}/>
            {props.en.body?.map((item, i) => (
                <Box key={i} sx={{ my: 1 }}>
                    <MenuOneLangBody item={item} />
                </Box>
            ))}
            <MenuOneLangTitle title={props.ru.title}/>
            {props.ru.body?.map((item, i) => (
                <Box key={i} sx={{ my: 1 }}>
                    <MenuOneLangBody item={item} />
                </Box>
            ))}

            <CardText
                label={"Приховати картку:"}
                value={props.hide ? "Так" : "Ні"}
            />
            {props.position && (
                <CardText label={"Позиція:"} value={props.position} />
            )}
            <Button sx={{ m: 2 }} onClick={editorClick}>
                Редагувати
            </Button>           
        </Container>
    );
};

export default AdminMenu;
