import { Box, Button } from "@mui/material";

interface IButtonGroup {
    ListClick: (arg0: string) => void
}

const ButtonGroup: React.FC<IButtonGroup> = ({ ListClick }) => {
    return (
        <Box sx={{ textAlign: "center" }}>
            <Button
                variant="outlined"
                sx={{ m: 2 }}
                onClick={() => ListClick("coffeelist")}
            >
                CoffeeList
            </Button>
            <Button
                variant="outlined"
                sx={{ m: 2 }}
                onClick={() => ListClick("tealist")}
            >
                TeaList
            </Button>
            <Button
                variant="outlined"
                sx={{ m: 2 }}
                onClick={() => ListClick("jamlist")}
            >
                JamList
            </Button>
            <Button
                variant="outlined"
                sx={{ m: 2 }}
                onClick={() => ListClick("millslist")}
            >
                MillsList
            </Button>
            <Button
                variant="outlined"
                sx={{ m: 2 }}
                onClick={() => ListClick("menu")}
            >
                Menu
            </Button>
        </Box>
    )
}

export default ButtonGroup;