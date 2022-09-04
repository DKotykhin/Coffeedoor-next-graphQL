import { Box, Button } from "@mui/material";
import { MouseEventHandler } from "react";

interface IButtonGroup {
    ListClick: (arg0: string) => void
}

const ButtonGroup: React.FC<IButtonGroup> = ({ ListClick }) => {
    return (
        <Box sx={{ textAlign: "center" }}>
            <Button
                variant="outlined"
                sx={{ m: 2 }}
                onClick={() => ListClick("coffeelist_multilangs")}
            >
                CoffeeList
            </Button>
            <Button
                variant="outlined"
                sx={{ m: 2 }}
                onClick={() => ListClick("tealist_multilangs")}
            >
                TeaList
            </Button>
            <Button
                variant="outlined"
                sx={{ m: 2 }}
                onClick={() => ListClick("jamlist_multilangs")}
            >
                JamList
            </Button>
            <Button
                variant="outlined"
                sx={{ m: 2 }}
                onClick={() => ListClick("millslist_multilangs")}
            >
                MillsList
            </Button>
            <Button
                variant="outlined"
                sx={{ m: 2 }}
                onClick={() => ListClick("menu_multi_news")}
            >
                Menu
            </Button>
        </Box>
    )
}

export default ButtonGroup;