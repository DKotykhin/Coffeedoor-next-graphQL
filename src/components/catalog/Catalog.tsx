import useTranslation from "next-translate/useTranslation";

import ItemList from "./ItemList";
import { ICatalogList, IFilter } from "types/cardType";

interface ICatalog {
    cataloglist: ICatalogList
}

const Catalog: React.FC<ICatalog> = ({ cataloglist }) => {    
    let { t } = useTranslation("cataloglist");

    const teaFilter: IFilter[] = [
        { button: t("buttonA"), value: t("valueA") },
        { button: t("buttonB"), value: t("valueB") },
        { button: t("buttonC"), value: t("valueC") },
        { button: t("buttonD"), value: t("valueD") },
        { button: t("buttonE"), value: t("valueE") },
    ];

    return (
        <>
            <ItemList
                itemList={cataloglist?.coffeelist}
                id={"coffee_list"}
                title={t("coffee_title")}
                subtitle={t("coffee_subtitle")}
            />
            <ItemList
                itemList={cataloglist?.tealist}
                filterArray={teaFilter}
                id={"tea_list"}
                title={t("tea_title")}
                subtitle={t("tea_subtitle")}
            />
            <ItemList
                itemList={cataloglist?.jamlist}
                id={"jam_list"}
                title={t("jam_title")}
                subtitle={t("jam_subtitle")}
            />
            <ItemList
                itemList={cataloglist?.millslist}
                id={"mills_list"}
                title={t("mills_title")}
                subtitle={t("mills_subtitle")}
            />
        </>
    );
};

export default Catalog;
