import { DocumentNode, gql } from "@apollo/client";

export const GET_ALL_LIST: DocumentNode = gql `
    query GetAllList(
        $query1: Coffeelist_multilangQueryInput
        $query2: Tealist_multilangQueryInput
        $query3: Jamlist_multilangQueryInput
        $query4: Millslist_multilangQueryInput
    ) {
        coffeelist_multilangs(query: $query1) {
            body {
                title
                name
                description
                tm
                country
            }
            _id
            card_img
            list_img
            weight
            price
            order
            hide
            position
        }
        jamlist_multilangs(query: $query3) {
            body {
                title
                name
                description
                tm
            }
            _id
            card_img
            list_img
            weight
            price
            order
            hide
            position
        }
        tealist_multilangs(query: $query2) {
            body {
                title
                name
                description
                tm
                country
                sort {
                    key
                    value
                }
            }
            _id
            card_img
            list_img
            weight
            price
            order
            hide
            position
        }
        millslist_multilangs(query: $query4) {
            body {
                title
                name
                description
                tm
                country
                additional_text_1
                additional_text_2
                additional_list
            }
            _id
            card_img
            list_img
            price
            order
            hide
            position
        }
    }
`;

export const GET_ALL_MENU: DocumentNode = gql `
    query GetAllMenu($query: Menu_multi_newQueryInput) {
        menu_multi_news(query: $query) {
            _id
            ua {
                body {
                    name
                    description
                    price
                }
                title
            }
            ru {
                body {
                    name
                    description
                    price
                }
                title
            }
            en {
                body {
                    name
                    description
                    price
                }
                title
            }
            hide
            position
        }
    }
`;