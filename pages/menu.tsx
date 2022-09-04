import Head from "next/head";
import { GetServerSideProps } from 'next';

import Accordeon from "../components/accordeon/Accordeon";
import MenuTitle from "../components/menuTitle/MenuTitle";
import ReturnButton from "../components/returnButton/ReturnButton";

import { GET_ALL_MENU } from "../apollo/getCatalog";
import client from '../apollo/client';
import { IMenuList } from "../types/menuType";

const MenuPage: React.FC<IMenuList> = ({ menulist }) => {
    return (
        <>
            <Head>
                <meta name="description" content="Меню кав'ярні" />
                <title>{"Меню кав'ярні"}</title>
            </Head>
            <MenuTitle />            
            <Accordeon menulist={menulist} />            
            <ReturnButton />
        </>
    );
}

export default MenuPage;

export const getServerSideProps: GetServerSideProps = async () => {
    const { data } = await client.query({
        query: GET_ALL_MENU,
        variables: {
            query: { hide_ne: true }
        },
    });
    return {
        props: {
            menulist: data,
        },
    };
}
