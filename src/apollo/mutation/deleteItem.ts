import { DocumentNode, gql } from "@apollo/client";

export const DELETE_COFFEE_ITEM: DocumentNode = gql `
    mutation DeleteCoffeeList(
        $delete: Coffeelist_multilangQueryInput!
    ) {
        deleteOneCoffeelist_multilang(query: $delete) {
            _id
        }
    }
`;

export const DELETE_TEA_ITEM: DocumentNode = gql `
    mutation DeleteTeaList(
        $delete: Tealist_multilangQueryInput!
    ) {
        deleteOneTealist_multilang(query: $delete) {
            _id
        }
    }
`;

export const DELETE_JAM_ITEM: DocumentNode = gql `
    mutation DeleteJamList(
        $delete: Jamlist_multilangQueryInput!
    ) {
        deleteOneJamlist_multilang(query: $delete) {
            _id
        }
    }
`;

export const DELETE_MILLS_ITEM: DocumentNode = gql `
    mutation DeleteMillsList(
        $delete: Millslist_multilangQueryInput!
    ) {
        deleteOneMillslist_multilang(query: $delete) {
            _id
        }
    }
`;

export const DELETE_MENU_ITEM: DocumentNode = gql `
    mutation DeleteMenuItem(
        $delete: Menu_multi_newQueryInput!
    ) {
        deleteOneMenu_multi_new(query: $delete) {
            _id
        }
    }
`;