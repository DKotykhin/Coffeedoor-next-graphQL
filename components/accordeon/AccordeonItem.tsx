import useTranslation from "next-translate/useTranslation";
import { Typography } from "@mui/material";

interface IAccordeonItem {
    name: string;
    description?: string;
    price: string
}

const AccordeonItem: React.FC<IAccordeonItem> = (item) => {
    let { t } = useTranslation("menutitle");
    return (
        <>
            <Typography
                sx={{ fontWeight: 700, fontSize: 18 }}
            >
                {item.name}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
                {item.description}
            </Typography>
            <Typography sx={{ fontSize: 18 }}>
                {item.price}
                {t("currency")}
            </Typography>
        </>
    )
}

export default AccordeonItem;