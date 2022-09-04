import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from '@apollo/client';
import { toast } from "react-toastify";

import { Container, Box, Button } from "@mui/material";

import TextInput from "../inputs/TextInput";
import RadioButtonInput from "../inputs/RadioButtonInput";
import MenuItemLang from "./MenuItemLang";
import MenuAddNewItem from "./MenuAddNewItem";
import { MenuData } from "../formData/MenuData";
import RadioButtonsGroup from "../updateCard/RadioButtonsGroup";
import ReturnLink from "../updateCard/ReturnLink";
import Spinner from "../../spinner/Spinner";

import { GET_ALL_LIST } from "../../../apollo/getCatalog";
import { UPDATE_MENU_ITEM } from "../../../apollo/updateItem";
import { DELETE_MENU_ITEM } from "../../../apollo/deleteItem";
import { INSERT_MENU_ITEM } from "../../../apollo/insertItem"

import { IMenu } from "../../../types/menuType";

interface IFormData {
    [key: string]: string
}

interface IUpdateMenu {
    cardData: IMenu,
    id: string | string[] | undefined
}

const UpdateMenu: React.FC<IUpdateMenu> = ({ cardData, id }) => {
    const [addItem, setAddItem] = useState(false);
    const [addGroup, setAddGroup] = useState(false);
    const { handleSubmit, register } = useForm();
    const router = useRouter();

    const [UpdateMenuItem, { data: MenuDataUpd, loading: MenuLoadingUpd, error: MenuErrorUpd }] = useMutation(UPDATE_MENU_ITEM, {
        refetchQueries: [{ query: GET_ALL_LIST }]
    });
    const [DeleteMenuItem, { data: MenuDataDel, loading: MenuLoadingDel, error: MenuErrorDel }] = useMutation(DELETE_MENU_ITEM, {
        refetchQueries: [{ query: GET_ALL_LIST }]
    });
    const [InsertMenuItem, { data: MenuDataIns, loading: MenuLoadingIns, error: MenuErrorIns }] = useMutation(INSERT_MENU_ITEM, {
        refetchQueries: [{ query: GET_ALL_LIST }]
    });

    useEffect(() => {
        if (MenuDataUpd || MenuDataDel || MenuDataIns) {
            router.push("/adminpanel");
        }
        MenuDataUpd && toast.success("Successfully update data in database");
        MenuDataDel && toast.success("Successfully deleted data from database");
        MenuDataIns && toast.success("Successfully add data to database");

    }, [MenuDataDel, MenuDataIns, MenuDataUpd, router]);

    useEffect(() => {
        if (MenuErrorUpd) {
            console.warn(MenuErrorUpd.message);
            toast.error(MenuErrorUpd.message);
        } else if (MenuErrorDel) {
            console.warn(MenuErrorDel.message);
            toast.error(MenuErrorDel.message);
        } else if (MenuErrorIns) {
            console.warn(MenuErrorIns.message);
            toast.error(MenuErrorIns.message);
        }
    }, [MenuErrorDel, MenuErrorIns, MenuErrorUpd])

    const onSubmit = (data: IFormData) => {
        const newData = MenuData(data);
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
        console.log("Видалити: ", id);
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
    if (!cardData) return <ReturnLink />

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

                    <MenuItemLang cardData={cardData} register={register} k={0} />
                    <MenuItemLang cardData={cardData} register={register} k={1} />
                    <MenuItemLang cardData={cardData} register={register} k={2} />
                    <MenuItemLang cardData={cardData} register={register} k={3} />
                    <MenuItemLang cardData={cardData} register={register} k={4} />
                    <MenuItemLang cardData={cardData} register={register} k={5} />
                    <MenuItemLang cardData={cardData} register={register} k={6} />
                    <MenuItemLang cardData={cardData} register={register} k={7} />
                    <MenuItemLang cardData={cardData} register={register} k={8} />
                    <MenuItemLang cardData={cardData} register={register} k={9} />

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
