import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import { Typography, Button } from "@mui/material";

import { selectCollection } from "../../store/selectors";
import { useAppSelector } from "../../store/hook";

import UpdateCard from "../../components/adminPanel/updateCard/UpdateCard";
import UpdateMenu from "../../components/adminPanel/updateMenu/UpdateMenu";
import { GET_ALLLIST, GET_ALLMENU } from "../../apollo/catalog";
import { ICard } from '../../types/cardType';
import { IMenu } from '../../types/menuType';

import Spinner from "../../components/spinner/Spinner";

const IdPage: NextPage = () => {
    const router = useRouter();
    // const { collectiondata } = useAppSelector(selectCollection);

    // const pageCardItem = collectiondata.carddata?.filter(
    //     (item: ICard) => item._id === router.query.id
    // );
    // const pageMenuItem = collectiondata.menudata?.filter(
    //     (item: IMenu) => item._id === router.query.id
    // ); 
    const { loading, error, data } = useQuery(GET_ALLLIST, {
        variables: {
            "query1": { "_id_in": router.query.id },
            "query2": { "_id_in": router.query.id },
            "query3": { "_id_in": router.query.id },
            "query4": { "_id_in": router.query.id },
        }
    });

    const { loading: menuLoading, error: menuError, data: menuData } = useQuery(GET_ALLMENU, {
        variables: {
            "query": { "_id_in": router.query.id },
        }
    });

    const cardItem = (data: any) => {
        if (data.coffeelist_multilangs.length) {
            return data.coffeelist_multilangs[0]
        } else if (data.tealist_multilangs.length) {
            return data.tealist_multilangs[0]
        } else if (data.jamlist_multilangs.length) {
            return data.jamlist_multilangs[0]
        } else if (data.millslist_multilangs.length) {
            return data.millslist_multilangs[0]
        }
    }

    return (
        <>
            <Head>
                <meta name="description" content="Card Page" />
                <title>Card Page</title>
            </Head>
            <Typography variant="h4" sx={{ textAlign: "center", mt: 3 }}>
                Картка товара
            </Typography>
            {data ? (
                <>
                    <UpdateCard
                        cardData={cardItem(data)}
                        id={router.query.id}
                        collection={'coffeelist_multilang'}
                    />
                    <UpdateMenu
                        cardData={menuData?.menu_multi_news[0]}
                        id={router.query.id}
                        collection={'coffeelist_multilang'}
                    />
                </>

            ) : (
                <>
                    <Link href="/admin">
                        <Button sx={{ display: "block", margin: "50px auto" }}>
                            Повернутися на панель адміністрування
                        </Button>
                    </Link>
                    <Spinner />
                </>
            )}
        </>
    );
};

export default IdPage;
