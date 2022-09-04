import { DocumentNode } from "@apollo/client";

import {
    UPDATE_COFFEE_ITEM,
    UPDATE_TEA_ITEM,
    UPDATE_JAM_ITEM,
    UPDATE_MILLS_ITEM,
} from "../../../apollo/updateItem";
import {
    DELETE_COFFEE_ITEM,
    DELETE_TEA_ITEM,
    DELETE_JAM_ITEM,
    DELETE_MILLS_ITEM,
} from "../../../apollo/deleteItem";
import {
    INSERT_COFFEE_ITEM,
    INSERT_TEA_ITEM,
    INSERT_JAM_ITEM,
    INSERT_MILLS_ITEM,
} from "../../../apollo/insertItem";

let QUERY_UPD: DocumentNode, QUERY_DEL: DocumentNode, QUERY_INS: DocumentNode;

const QueryConstants = (query: string) => {
    if (query === "Coffeelist_multilang") {
        QUERY_UPD = UPDATE_COFFEE_ITEM;
        QUERY_DEL = DELETE_COFFEE_ITEM;
        QUERY_INS = INSERT_COFFEE_ITEM;
    } else if (query === "Tealist_multilang") {
        QUERY_UPD = UPDATE_TEA_ITEM;
        QUERY_DEL = DELETE_TEA_ITEM;
        QUERY_INS = INSERT_TEA_ITEM;
    } else if (query === "Jamlist_multilang") {
        QUERY_UPD = UPDATE_JAM_ITEM;
        QUERY_DEL = DELETE_JAM_ITEM;
        QUERY_INS = INSERT_JAM_ITEM;
    } else if (query === "Millslist_multilang") {
        QUERY_UPD = UPDATE_MILLS_ITEM;
        QUERY_DEL = DELETE_MILLS_ITEM;
        QUERY_INS = INSERT_MILLS_ITEM;
    }
    return { QUERY_UPD, QUERY_DEL, QUERY_INS };
};

export default QueryConstants;
