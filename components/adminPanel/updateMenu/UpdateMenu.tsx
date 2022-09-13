import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from '@apollo/client';
import { toast } from "react-toastify";

import { Container, Box, Button } from "@mui/material";

import {TextInput, RadioButtonInput} from "../inputs";
import MenuItemBlock from "./MenuItemBlock";
import MenuAddNewItem from "./MenuAddNewItem";
import { MenuData } from "../formData/MenuData";
import RadioButtonsGroup from "../updateCard/RadioButtonsGroup";
import Spinner from "../../spinner/Spinner";

import { GET_ALL_MENU } from "../../../apollo/query/getMenu";
import { UPDATE_MENU_ITEM } from "../../../apollo/mutation/updateItem";
import { DELETE_MENU_ITEM } from "../../../apollo/mutation/deleteItem";
import { INSERT_MENU_ITEM } from "../../../apollo/mutation/insertItem"

import { IMenu, INewMenu } from "../../../types/menuType";

interface IFormData {
    [key: string]: string
}
interface IUpdateMenu {
    cardData: IMenu,
    id: string | string[] | undefined
}
interface IVar {
    _id: string | string[] | undefined
}

const UpdateMenu: React.FC<IUpdateMenu> = ({ cardData, id }) => {
    const [addItem, setAddItem] = useState(false);
    const [addGroup, setAddGroup] = useState(false);
    const { handleSubmit, register } = useForm();
    const router = useRouter();

    const [UpdateMenuItem, { loading: MenuLoadingUpd }] = useMutation<IVar, {query: IVar, set: INewMenu}>(UPDATE_MENU_ITEM, {
        refetchQueries: [{ query: GET_ALL_MENU }],
        onCompleted: () => {
            router.push("/adminpanel");
            toast.success("Successfully updated data in database");
        },
        onError: (data) => {
            toast.error(data.message);
        },
    });
    const [DeleteMenuItem, { loading: MenuLoadingDel }] = useMutation<IVar, {delete: IVar}>(DELETE_MENU_ITEM, {
        refetchQueries: [{ query: GET_ALL_MENU }],
        onCompleted: () => {
            router.push("/adminpanel");
            toast.success("Successfully deleted data from database");
        },
        onError: (data) => {
            toast.error(data.message);
        },
    });
    const [InsertMenuItem, { loading: MenuLoadingIns }] = useMutation<IVar, {insert: INewMenu}>(INSERT_MENU_ITEM, {
        refetchQueries: [{ query: GET_ALL_MENU }],
        onCompleted: () => {
            router.push("/adminpanel");
            toast.success("Successfully added data to database");
        },
        onError: (data) => {
            toast.error(data.message);
        },
    });

    const onSubmit = (data: IFormData) => {
        const newData: INewMenu = MenuData(data);
        // console.log(newData);
        const edit = {
            query: { _id: id },
            set: newData
        }
        const ins = {
            insert: newData
        }
        addGroup ? InsertMenuItem({ variables: ins }) : UpdateMenuItem({ variables: edit })
    };

    const onDelete = () => {
        // console.log("Видалити: ", id);
        const variables = {
            delete: { _id: id }
        }
        DeleteMenuItem({ variables })
    };

    const onChange = (data: string) => {
        if (data === 'add') setAddGroup(true)
        else setAddGroup(false)
    }

    if (MenuLoadingUpd || MenuLoadingDel || MenuLoadingIns) return <Spinner />;

    return (
        <Container sx={{ my: 2 }}>
            <RadioButtonsGroup onChange={onChange} />
            {cardData &&
                <Box onSubmit={handleSubmit(onSubmit)} component="form">
                    <TextInput
                        label={"Назва ua:"}
                        value={cardData?.ua.title}
                        reg={register("title_ua")}
                    />
                    <TextInput
                        label={"Назва ru:"}
                        value={cardData?.ru.title}
                        reg={register("title_ru")}
                    />
                    <TextInput
                        label={"Назва en:"}
                        value={cardData?.en.title}
                        reg={register("title_en")}
                    />                   
                    {cardData.ua.body.map((item, i) => (
                        <MenuItemBlock cardData={cardData} register={register} k={i} key={i} />
                    ))}
                    {addItem && <MenuAddNewItem register={register} k={99} />}
                    {!addGroup &&
                        <Button
                            onClick={() => setAddItem(!addItem)}
                            sx={{ display: "block", margin: "20px auto" }}
                        >
                            {addItem ? "Приховати нову позицію" : "Додати нову позицію"}
                        </Button>
                    }
                    <TextInput
                        label={"Позиція:"}
                        value={cardData?.position}
                        reg={register("position")}
                    />
                    <RadioButtonInput
                        label={"Приховати картку:"}
                        value={cardData?.hide}
                        reg={register("hide")}
                    />
                    <Box sx={{ textAlign: "center", mb: 4 }}>
                        {!addGroup &&
                            <Button color="error" sx={{ mx: 2 }} onClick={onDelete}>
                                Видалити
                            </Button>
                        }
                        <Link href="/adminpanel">
                            <Button sx={{ mx: 2, color: "#898989" }}>
                                Відмінити
                            </Button>
                        </Link>
                        <Button type="submit" sx={{ mx: 2 }}>
                            {addGroup ? "Додати нову картку" : "Підтвердити"}
                        </Button>
                    </Box>
                </Box>
            }
        </Container>
    );
};

export default UpdateMenu;
