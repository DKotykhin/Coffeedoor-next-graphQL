import Head from "next/head";
import { useRouter } from "next/router";
import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';

import { Typography } from "@mui/material";

import UpdateCard from "../../components/adminPanel/updateCard/UpdateCard";
import UpdateMenu from "../../components/adminPanel/updateMenu/UpdateMenu";
import Spinner from "../../components/spinner/Spinner";

import { GET_ALL_LIST, GET_ALL_MENU } from "../../apollo/getCatalog";

const IdPage: NextPage = () => {
    const router = useRouter();

    const { loading: cardLoading, error: cardError, data: cardData } = useQuery(GET_ALL_LIST, {
        variables: {
            query1: { _id: router.query.id },
            query2: { _id: router.query.id },
            query3: { _id: router.query.id },
            query4: { _id: router.query.id },
        }
    });

    const { loading: menuLoading, error: menuError, data: menuData } = useQuery(GET_ALL_MENU, {
        variables: {
            query: { _id: router.query.id },
        }
    });

    const searchCardItem = (cardData: any) => {
        if (cardData.coffeelist_multilangs.length) {
            return cardData.coffeelist_multilangs[0]
        } else if (cardData.tealist_multilangs.length) {
            return cardData.tealist_multilangs[0]
        } else if (cardData.jamlist_multilangs.length) {
            return cardData.jamlist_multilangs[0]
        } else if (cardData.millslist_multilangs.length) {
            return cardData.millslist_multilangs[0]
        }
    }

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
            {menuData?.menu_multi_news.length ? (
                <UpdateMenu
                    cardData={menuData?.menu_multi_news[0]}
                    id={router.query.id}
                />
            ) : (
                <UpdateCard
                    cardData={searchCardItem(cardData)}
                    id={router.query.id}
                />
            )
            }
        </>
    );
};

export default IdPage;
