import Head from "next/head";
import { GetServerSideProps } from 'next';

import Accordeon from "../components/accordeon/Accordeon";
import MenuTitle from "../components/menuTitle/MenuTitle";
import ReturnButton from "../components/returnButton/ReturnButton";

import { GET_ALLMENU } from "../apollo/catalog";
import client from '../apollo/client';

const MenuPage: React.FC = ({ menulist }: any) => {

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
        query: GET_ALLMENU,
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
