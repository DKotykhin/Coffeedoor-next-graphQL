import React, { useState } from "react";
import Link from "next/link";
import { useLazyQuery } from '@apollo/client';
import { toast } from 'react-toastify';

import { Button, Container, Typography } from "@mui/material";

import AdminCard from "./AdminCard";
import AdminMenu from "./AdminMenu";
import Spinner from "../spinner/Spinner";
import FindText from "./FindText";
import ButtonGroup from "./ButtonGroup";

import { GET_ALL_LIST } from "../../apollo/query/getCatalog";
import { GET_ALL_MENU } from "../../apollo/query/getMenu";
import { ICard, ICatalogList } from "../../types/cardType";
import { IMenu, IMenuList } from "../../types/menuType";

const AdminButtons: React.FC = () => {
    const [collection, setCollection] = useState('');

    const [getList, { loading: cardLoading, data: cardData }] = useLazyQuery<ICatalogList>(GET_ALL_LIST, {
        onError: (data) => {
            toast.error(data.message);
        },
    });
    const [getMenu, { loading: menuLoading, data: menuData }] = useLazyQuery<IMenuList>(GET_ALL_MENU, {
        onError: (data) => {
            toast.error(data.message);
        },
    });

    const ListClick = (collection: string) => {
        setCollection(collection);
        if (collection === "menu") {
            getMenu()
        } else getList()
    };

    return (
        <Container>
            <Typography sx={{ textAlign: "center", m: 3, fontSize: 22 }}>
                Панель адміністрування
            </Typography>
            <Link href="/">
                <Button sx={{ display: "block", margin: "0 auto" }}>
                    Повернутися на головну
                </Button>
            </Link>
            <ButtonGroup ListClick={ListClick} />
            {(cardLoading || menuLoading) ? (
                <Spinner />
            ) : (
                <>
                    {collection === "coffeelist" && cardData &&
                        <>
                            <FindText length={cardData.coffeelist.length} />
                            {cardData.coffeelist?.map((item: ICard) => (
                                <AdminCard props={item} key={item._id} />
                            ))}
                        </>
                    }
                    {collection === "jamlist" && cardData &&
                        <>
                            <FindText length={cardData.jamlist.length} />
                            {cardData.jamlist?.map((item: ICard) => (
                                <AdminCard props={item} key={item._id} />
                            ))}
                        </>
                    }
                    {collection === "tealist" && cardData &&
                        <>
                            <FindText length={cardData.tealist.length} />
                            {cardData.tealist?.map((item: ICard) => (
                                <AdminCard props={item} key={item._id} />
                            ))}
                        </>
                    }
                    {collection === "millslist" && cardData &&
                        <>
                            <FindText length={cardData.millslist.length} />
                            {cardData.millslist?.map((item: ICard) => (
                                <AdminCard props={item} key={item._id} />
                            ))}
                        </>
                    }
                    {collection === "menu" && menuData &&
                        <>
                            <FindText length={menuData.menu.length} />
                            {menuData.menu?.map((item: IMenu) => (
                                <AdminMenu props={item} key={item._id} />
                            ))}
                        </>
                    }
                </>
            )}
        </Container>
    );
}

export default AdminButtons;
