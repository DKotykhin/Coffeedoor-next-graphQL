import Head from "next/head";
import Link from "next/link";
import type { NextPage } from 'next';

import { useQuery } from '@apollo/client';

import { Typography, Button } from "@mui/material";

import { selectCollection } from "../../store/selectors";
import { useAppSelector } from "../../store/hook";

import AddCard from "../../components/adminPanel/addCard/AddCard";
import AddMenu from "../../components/adminPanel/addMenu/AddMenu";
import { GET_ALLLIST, GET_ALLMENU } from "../../apollo/catalog";

import { ICard } from '../../types/cardType';
import { IMenu } from '../../types/menuType';

const AddPage: NextPage = () => {
    const { id } = useAppSelector(selectCollection);

    // const pageMenuItem = collectiondata.menudata?.filter(
    //     (item: IMenu) => item._id === id
    // );    
    // const pageCardItem = collectiondata.carddata?.filter(
    //     (item: ICard) => item._id === id
    // );
    const { loading, error, data } = useQuery(GET_ALLLIST, {
        variables: {
            "query1": { "_id_in": id },
            "query2": { "_id_in": id },
            "query3": { "_id_in": id },
            "query4": { "_id_in": id },
        }
    });

    const { loading: menuLoading, error: menuError, data: menuData } = useQuery(GET_ALLMENU, {
        variables: {
            "query": { "_id_in": id },
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
                <meta name="description" content="Add Card Page" />
                <title>Add Card Page</title>
            </Head>
            <Typography variant="h4" sx={{ textAlign: "center", mt: 3 }}>
                Картка додавання товара
            </Typography>
            {data ? (
                <>
                    <AddCard
                        cardData={cardItem(data)}
                        collection={'coffeelist_multilang'}
                    />
                    <AddMenu
                        cardData={menuData?.menu_multi_news[0]}
                        collection={'coffeelist_multilang'}
                    />
                </>

            ) : (
                <Link href="/admin">
                    <Button sx={{ display: "block", margin: "50px auto" }}>
                        Повернутися на панель адміністрування
                    </Button>
                </Link>
            )}
        </>
    );
};

export default AddPage;