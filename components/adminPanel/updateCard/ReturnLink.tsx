import Link from "next/link";

import { Typography, Button } from "@mui/material";

const ReturnLink: React.FC = () => {
    return (
        <>
            <Typography sx={{ textAlign: 'center', mt: 5, fontSize: 22 }}>
                Немає данних для відображення
            </Typography>
            <Link href="/adminpanel">
                <Button sx={{ display: "block", margin: "50px auto" }}>
                    Повернутися на панель адміністрування
                </Button>
            </Link>
        </>
    )
}

export default ReturnLink;