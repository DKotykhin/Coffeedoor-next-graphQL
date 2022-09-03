import { gql } from "@apollo/client";

export const UPDATE_COFFEE_ITEM = gql `
    mutation UpdateCoffeeList(
        $query: Coffeelist_multilangQueryInput
        $set: Coffeelist_multilangUpdateInput!
    ) {
        updateOneCoffeelist_multilang(query: $query, set: $set) {
            _id
        }
    }
`;

export const UPDATE_TEA_ITEM = gql `
    mutation UpdateTeaList(
        $query: Tealist_multilangQueryInput
        $set: Tealist_multilangUpdateInput!
    ) {
        updateOneTealist_multilang(query: $query, set: $set) {
            _id
        }
    }
`;

export const UPDATE_JAM_ITEM = gql `
    mutation UpdateJamList(
        $query: Jamlist_multilangQueryInput
        $set: Jamlist_multilangUpdateInput!
    ) {
        updateOneJamlist_multilang(query: $query, set: $set) {
            _id
        }
    }
`;

export const UPDATE_MILLS_ITEM = gql `
    mutation UpdateMillsList(
        $query: Millslist_multilangQueryInput
        $set: Millslist_multilangUpdateInput!
    ) {
        updateOneMillslist_multilang(query: $query, set: $set) {
            _id
        }
    }
`;

export const UPDATE_MENU_ITEM = gql `
    mutation UpdateMenuItem(
        $query: Menu_multi_newQueryInput
        $set: Menu_multi_newUpdateInput!
    ) {
        updateOneMenu_multi_new(query: $query, set: $set) {
            _id
        }
    }
`;