import { DocumentNode, gql } from "@apollo/client";

export const GET_ALL_MENU: DocumentNode = gql `
    query GetAllMenu($query: Menu_multi_newQueryInput) {
        menu: menu_multi_news(sortBy: POSITION_ASC, query: $query) {
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