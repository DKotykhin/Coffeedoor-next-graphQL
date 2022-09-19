import useTranslation from "next-translate/useTranslation";

import ItemList from "./ItemList";
import { ICatalogList, IFilter } from "../../types/cardType";

interface ICatalog {
    cataloglist: ICatalogList
}

const Catalog: React.FC<ICatalog> = ({ cataloglist }) => {    
    let { t } = useTranslation("cataloglist");

    const teaFilter: IFilter[] = [
        { key: t("buttonA"), value: t("valueA") },
        { key: t("buttonB"), value: t("valueB") },
        { key: t("buttonC"), value: t("valueC") },
        { key: t("buttonD"), value: t("valueD") },
        { key: t("buttonE"), value: t("valueE") },
    ];

    return (
        <>
            <ItemList
                props={cataloglist?.coffeelist}
                id={"coffee_list"}
                title={t("coffee_title")}
                subtitle={t("coffee_subtitle")}
            />
            <ItemList
                props={cataloglist?.tealist}
                filterArray={teaFilter}
                id={"tea_list"}
                title={t("tea_title")}
                subtitle={t("tea_subtitle")}
            />
            <ItemList
                props={cataloglist?.jamlist}
                id={"jam_list"}
                title={t("jam_title")}
                subtitle={t("jam_subtitle")}
            />
            <ItemList
                props={cataloglist?.millslist}
                id={"mills_list"}
                title={t("mills_title")}
                subtitle={t("mills_subtitle")}
            />
        </>
    );
};

export default Catalog;
