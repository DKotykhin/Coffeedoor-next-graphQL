import { DocumentNode, gql } from "@apollo/client";

export const INSERT_COFFEE_ITEM: DocumentNode = gql `
    mutation InsertCoffeeItem(
        $insert: Coffeelist_multilangInsertInput!
    ) {
        insertOneCoffeelist_multilang(data: $insert) {
            _id
        }
    }
`;

export const INSERT_TEA_ITEM: DocumentNode = gql `
    mutation InsertTeaItem(
        $insert: Tealist_multilangInsertInput!
    ) {
        insertOneTealist_multilang(data: $insert) {
            _id
        }
    }
`;

export const INSERT_JAM_ITEM: DocumentNode = gql `
    mutation InsertJamItem(
        $insert: Jamlist_multilangInsertInput!
    ) {
        insertOneJamlist_multilang(data: $insert) {
            _id
        }
    }
`;

export const INSERT_MILLS_ITEM: DocumentNode = gql `
    mutation InsertMillsItem(
        $insert: Millslist_multilangInsertInput!
    ) {
        insertOneMillslist_multilang(data: $insert) {
            _id
        }
    }
`;

export const INSERT_MENU_ITEM: DocumentNode = gql `
    mutation InsertMillsItem(
        $insert: Menu_multi_newInsertInput!
    ) {
        insertOneMenu_multi_new(data: $insert) {
            _id
        }
    }
`;