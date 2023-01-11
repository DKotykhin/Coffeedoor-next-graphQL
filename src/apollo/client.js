import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import * as Realm from "realm-web";

const APP_ID = process.env.NEXT_PUBLIC_APP_ID || "";
const APP_URL = `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`

const app = new Realm.App(APP_ID);

async function getValidAccessToken() {
    if (!app.currentUser) {
        await app.logIn(Realm.Credentials.anonymous());
    } else {
        await app.currentUser.refreshCustomData();
    }
    return app.currentUser?.accessToken;
}

const client = new ApolloClient({
    link: new HttpLink({
        uri: APP_URL,
        fetch: async(uri, options) => {
            const accessToken = await getValidAccessToken();
            options.headers.Authorization = `Bearer ${accessToken}`;
            return fetch(uri, options);
        },
    }),
    cache: new InMemoryCache(),
    ssrMode: true,
});

export default client;