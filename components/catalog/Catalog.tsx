import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import ItemList from "./ItemList";
import { teaFilter_ua, teaFilter_ru, teaFilter_en } from "./filterConstants";
import { ICatalogList, IFilter } from "../../types/cardType";

interface ICatalog {
    cataloglist: ICatalogList
}

const Catalog: React.FC<ICatalog> = ({ cataloglist }) => {
    const router = useRouter();
    let { t } = useTranslation("cataloglist");
    let teaFilter: IFilter[], i: number;

    switch (router.locale) {
        case "ua":
            teaFilter = teaFilter_ua;
            i = 0;
            break;
        case "ru":
            teaFilter = teaFilter_ru;
            i = 1;
            break;
        case "en":
            teaFilter = teaFilter_en;
            i = 2;
            break;
        default:
            teaFilter = teaFilter_ua;
            i = 0;
    }

    return (
        <>
            <ItemList
                props={cataloglist?.coffeelist_multilangs}
                showfilter={false}
                i={i}                
                id={"coffee_list"}
                title={t("coffee_title")}
                subtitle={t("coffee_subtitle")}
            />
            <ItemList
                props={cataloglist?.tealist_multilangs}
                showfilter={true}
                i={i}
                filterArray={teaFilter}
                id={"tea_list"}
                title={t("tea_title")}
                subtitle={t("tea_subtitle")}
            />
            <ItemList
                props={cataloglist?.jamlist_multilangs}
                showfilter={false}
                i={i}                
                id={"jam_list"}
                title={t("jam_title")}
                subtitle={t("jam_subtitle")}
            />
            <ItemList
                props={cataloglist?.millslist_multilangs}
                showfilter={false}
                i={i}                
                id={"mills_list"}
                title={t("mills_title")}
                subtitle={t("mills_subtitle")}
            />
        </>
    );
};

export default Catalog;
