import { gql } from "@apollo/client";

export const INSERT_COFFEE_ITEM = gql `
    mutation InsertCoffeeItem(
        $insert: Coffeelist_multilangInsertInput!
    ) {
        insertOneCoffeelist_multilang(data: $insert) {
            _id
        }
    }
`;

export const INSERT_TEA_ITEM = gql `
    mutation InsertTeaItem(
        $insert: Tealist_multilangInsertInput!
    ) {
        insertOneTealist_multilang(data: $insert) {
            _id
        }
    }
`;

export const INSERT_JAM_ITEM = gql `
    mutation InsertJamItem(
        $insert: Jamlist_multilangInsertInput!
    ) {
        insertOneJamlist_multilang(data: $insert) {
            _id
        }
    }
`;

export const INSERT_MILLS_ITEM = gql `
    mutation InsertMillsItem(
        $insert: Millslist_multilangInsertInput!
    ) {
        insertOneMillslist_multilang(data: $insert) {
            _id
        }
    }
`;