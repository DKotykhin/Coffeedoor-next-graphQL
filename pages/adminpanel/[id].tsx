import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';

import { Typography } from "@mui/material";

import UpdateCard from "../../components/adminPanel/updateCard/UpdateCard";
import UpdateMenu from "../../components/adminPanel/updateMenu/UpdateMenu";
import Spinner from "../../components/spinner/Spinner";
import ReturnLink from "../../components/adminPanel/updateCard/ReturnLink";

import { GET_ALL_LIST, GET_ALL_MENU } from "../../apollo/getCatalog";
import { ICard, ICatalogList } from "../../types/cardType";
import { IMenu, IMenuList } from "../../types/menuType";

const IdPage: NextPage = () => {
    const router = useRouter();
    const [cardItem, setCardItem] = useState<ICard>();
    const [menuItem, setMenuItem] = useState<IMenu>();

    const { loading: cardLoading, error: cardError } = useQuery(GET_ALL_LIST, {
        variables: {
            query1: { _id: router.query.id },
            query2: { _id: router.query.id },
            query3: { _id: router.query.id },
            query4: { _id: router.query.id },
        },
        onCompleted(data: ICatalogList) {
            let key: keyof typeof data;
            for (key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    if (element.length) {
                        setCardItem(element[0])
                    }
                }
            }
        },
    });

    const { loading: menuLoading, error: menuError } = useQuery(GET_ALL_MENU, {
        variables: {
            query: { _id: router.query.id },
        },
        onCompleted(data: IMenuList) {
            if (data.menu.length) {
                setMenuItem(data.menu[0])
            }
        }
    });

    if (cardLoading || menuLoading) return <Spinner />;

    return (
        <>
            <Head>
                <meta name="description" content="Card Page" />
                <title>Card Page</title>
            </Head>
            <Typography variant="h4" sx={{ textAlign: "center", mt: 3 }}>
                Картка товара
            </Typography>
            {(cardError || menuError) &&
                <Typography variant="h4" sx={{ textAlign: "center", mt: 3 }}>
                    Помилка отримання даних
                </Typography>
            }
            {menuItem ? (
                <UpdateMenu
                    cardData={menuItem}
                    id={router.query.id}
                />
            ) : (cardItem ? (
                <UpdateCard
                    cardData={cardItem}
                    id={router.query.id}
                />
            ) : <ReturnLink />
            )}
        </>
    );
};

export default IdPage;
