import { Typography } from "@mui/material";

interface IFind {
    length: number;
}

const FindText: React.FC<IFind> = ({ length }) => {
    return (
        <Typography
            variant="h6"
            sx={{ textAlign: "center", mt: 2 }}
        >
            {"Знайдено "}
            {length ? length : null}
            {(length) > 4
                ? " елементів"
                : " елемента"}
        </Typography>
    );
};

export default FindText;