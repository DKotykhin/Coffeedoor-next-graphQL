import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from '@apollo/client';
import { toast } from 'react-toastify';

import { Button, Container, Typography } from "@mui/material";

import AdminCard from "./AdminCard";
import AdminMenu from "./AdminMenu";
import Spinner from "../spinner/Spinner";
import FindText from "./FindText";

import { GET_ALL_LIST, GET_ALL_MENU } from "../../apollo/getCatalog";
import { ICard } from "../../types/cardType";
import { IMenu } from "../../types/menuType";
import ButtonGroup from "./ButtonGroup";

const AdminButtons: React.FC = () => {
    const [collection, setCollection] = useState('');

    const { loading: cardLoading, data: cardData } = useQuery(GET_ALL_LIST, {        
        onError: (data) => {
            toast.error(data.message);
        },          
    });
    const { loading: menuLoading, data: menuData } = useQuery(GET_ALL_MENU, {        
        onError: (data) => {
            toast.error(data.message);
        },
    });

    const ListClick = (collection: string) => {        
        setCollection(collection);
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
            {(cardLoading || menuLoading) ? (
                <Spinner />
            ) : (
                <>                    
                    <ButtonGroup ListClick={ListClick}/>
                    {collection === "coffeelist" &&
                        <>
                            <FindText length={cardData.coffeelist_multilangs.length} />
                            {cardData.coffeelist_multilangs?.map((item: ICard) => (
                                <AdminCard props={item} key={item._id} />
                            ))}
                        </>
                    }
                    {collection === "jamlist" &&
                        <>
                            <FindText length={cardData.jamlist_multilangs.length} />
                            {cardData.jamlist_multilangs?.map((item: ICard) => (
                                <AdminCard props={item} key={item._id} />
                            ))}
                        </>
                    }
                    {collection === "tealist" &&
                        <>
                            <FindText length={cardData.tealist_multilangs.length} />
                            {cardData.tealist_multilangs?.map((item: ICard) => (
                                <AdminCard props={item} key={item._id} />
                            ))}
                        </>
                    }
                    {collection === "millslist" &&
                        <>
                            <FindText length={cardData.millslist_multilangs.length} />
                            {cardData.millslist_multilangs?.map((item: ICard) => (
                                <AdminCard props={item} key={item._id} />
                            ))}
                        </>
                    }
                    {collection === "menu" &&
                        <>
                            <FindText length={menuData.menu_multi_news.length} />
                            {menuData.menu_multi_news?.map((item: IMenu) => (
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
