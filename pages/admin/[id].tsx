import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';

import { Typography, Button } from "@mui/material";

import UpdateCard from "../../components/adminPanel/updateCard/UpdateCard";
import UpdateMenu from "../../components/adminPanel/updateMenu/UpdateMenu";
import Spinner from "../../components/spinner/Spinner";

import { GET_ALLLIST, GET_ALLMENU } from "../../apollo/catalog";

const IdPage: NextPage = () => {
    const router = useRouter();

    const { loading: cardLoading, error: cardError, data: cardData } = useQuery(GET_ALLLIST, {
        variables: {
            query1: { _id: router.query.id },
            query2: { _id: router.query.id },
            query3: { _id: router.query.id },
            query4: { _id: router.query.id },
        }
    });

    const { loading: menuLoading, error: menuError, data: menuData } = useQuery(GET_ALLMENU, {
        variables: {
            query: { _id: router.query.id },
        }
    });

    const cardItem = (cardData: any) => {
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

    if (cardLoading || menuLoading) return <Spinner />

    return (
        <>
            <Head>
                <meta name="description" content="Card Page" />
                <title>Card Page</title>
            </Head>
            <Typography variant="h4" sx={{ textAlign: "center", mt: 3 }}>
                Картка товара
            </Typography>
            {cardData ? (
                <UpdateCard
                    cardData={cardItem(cardData)}
                    id={router.query.id}
                />
            ) : menuData ? (
                <UpdateMenu
                    cardData={menuData?.menu_multi_news[0]}
                    id={router.query.id}
                />
            ) : (
                <>
                    <Typography sx={{ textAlign: 'center', mt: 5, fontSize: 22 }}>
                        Немає данних для відображення
                    </Typography>
                    <Link href="/admin">
                        <Button sx={{ display: "block", margin: "50px auto" }}>
                            Повернутися на панель адміністрування
                        </Button>
                    </Link>

                </>
            )}
        </>
    );
};

export default IdPage;
