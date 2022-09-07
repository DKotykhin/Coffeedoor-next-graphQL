import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import * as Realm from "realm-web";

// const API_Key = 'KTlex9jwxwl4B6tZqkZSiZV7UE8YOw317VjUWo9JNdMy7ahryexiW7a7nsRa0EtP';
const APP_ID = 'application-0-hyein'

const app = new Realm.App(APP_ID);

async function getValidAccessToken() {
    if (!app.currentUser) {
        await app.logIn(Realm.Credentials.anonymous());
    } else {
        await app.currentUser.refreshCustomData();
    }
    return app.currentUser.accessToken;
}

const client = new ApolloClient({
    link: new HttpLink({
        uri: `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`,
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