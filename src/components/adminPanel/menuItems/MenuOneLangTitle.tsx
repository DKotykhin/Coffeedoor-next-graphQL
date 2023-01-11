import { Typography } from "@mui/material";

interface IOneLang {
    title: string
}

const MenuOneLangTitle: React.FC<IOneLang> = ({ title }) => {
    return (
        <>
            <Typography sx={{ mt: 2, fontWeight: 700 }}>
                <Typography component="span" variant="body2">
                    {"Назва групи: "}
                </Typography>
                {title}
            </Typography>
        </>
    );
};

export default MenuOneLangTitle;