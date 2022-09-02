import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import Link from "next/link";
import { useQuery } from '@apollo/client';

import { toast } from 'react-toastify';

import { Box, Button, Container, Typography } from "@mui/material";

import AdminCard from "./AdminCard";
import AdminMenu from "./AdminMenu";
import Spinner from "../spinner/Spinner";
import { getCollectionItems } from "../../store/adminSlice";
import { selectCollection } from "../../store/selectors";
import { getData } from "./AdminApi";
import { GET_ALLLIST, GET_ALLMENU } from "../../apollo/catalog";
import { ICard } from "../../types/cardType";
import FindText from "./FindText";
import { IMenu } from "../../types/menuType";

const AdminButtons: React.FC = () => {
    const [collection, setCollection] = useState('');
    // const dispatch = useAppDispatch();
    // const { collectiondata } = useAppSelector(selectCollection);
    const { loading, error, data } = useQuery(GET_ALLLIST);
    const { loading: menuLoading, error: menuError, data: menuData } = useQuery(GET_ALLMENU);


    // const ListClick = (collection: string) => {
    //     setLoading(true);
    //     getData(collection)
    //         .then((data) => {
    //             if (collection === "menu_multilang") {
    //                 dispatch(getCollectionItems({ collection, carddata: [], menudata: data }));
    //             } else {
    //                 dispatch(getCollectionItems({ collection, carddata: data, menudata: [] }));
    //             }
    //             setLoading(false);
    //         })
    //         .catch(function (error) {
    //             console.warn(error.message);
    //             toast.error("Can't get data from database");
    //         });
    // };

    const ListClick = (collection: string) => {
        console.log(data)
        console.log(menuData)
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
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <Box sx={{ textAlign: "center" }}>
                        <Button
                            variant="outlined"
                            sx={{ m: 2 }}
                            onClick={() => ListClick("coffeelist_multilangs")}
                        >
                            CoffeeList
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{ m: 2 }}
                            onClick={() => ListClick("tealist_multilangs")}
                        >
                            TeaList
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{ m: 2 }}
                            onClick={() => ListClick("jamlist_multilangs")}
                        >
                            JamList
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{ m: 2 }}
                            onClick={() => ListClick("millslist_multilangs")}
                        >
                            MillsList
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{ m: 2 }}
                            onClick={() => ListClick("menu_multi_news")}
                        >
                            Menu
                        </Button>
                    </Box>
                    {/* {collectiondata && (
                        <Typography
                            variant="h6"
                            sx={{ textAlign: "center", mt: 2 }}
                        >
                            {"Знайдено "}
                            {collectiondata.carddata.length ? collectiondata.carddata.length : null}
                           
                            {(collectiondata.carddata.length || collectiondata.menudata.length) > 4
                                ? " елементів"
                                : " елемента"}
                        </Typography>
                    )}
                    {collectiondata.collection === "menu_multilang"
                        ? collectiondata.menudata?.map((item) => (
                            <AdminMenu props={item} key={item._id} />
                        ))
                        : data.coffeelist_multilangs?.map((item) => (
                            <AdminCard props={item} key={item._id} />
                        ))} */}
                    {collection === "coffeelist_multilangs" &&
                        <>
                            <FindText length={data.coffeelist_multilangs.length} />
                            {data.coffeelist_multilangs?.map((item: ICard) => (
                                <AdminCard props={item} key={item._id} />
                            ))}
                        </>
                    }
                    {collection === "jamlist_multilangs" &&
                        <>
                            <FindText length={data.jamlist_multilangs.length} />
                            {data.jamlist_multilangs?.map((item: ICard) => (
                                <AdminCard props={item} key={item._id} />
                            ))}
                        </>
                    }
                    {collection === "tealist_multilangs" &&
                        <>
                            <FindText length={data.tealist_multilangs.length} />
                            {data.tealist_multilangs?.map((item: ICard) => (
                                <AdminCard props={item} key={item._id} />
                            ))}
                        </>
                    }
                    {collection === "millslist_multilangs" &&
                        <>
                            <FindText length={data.millslist_multilangs.length} />
                            {data.millslist_multilangs?.map((item: ICard) => (
                                <AdminCard props={item} key={item._id} />
                            ))}
                        </>
                    }
                    {collection === "menu_multi_news" &&
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
