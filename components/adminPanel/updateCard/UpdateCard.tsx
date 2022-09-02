import { useAppDispatch } from "../../../store/hook";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Container, Box, Button } from "@mui/material";
import { toast } from "react-toastify";

import { CardData } from "../formData/CardData";
import { updateData, deleteData } from "../AdminApi";
import {
    updateCardItem,
    deleteCardItem,
} from "../../../store/adminSlice";
import { ICard, INewCardData } from "../../../types/cardType";
import CardForm from "../cardItems/CardForm";

interface IUpdateCard {
    cardData: ICard;
    id: any;
    collection: string
}

interface IFormData {
    [key: string]: string
}

const UpdateCard: React.FC<IUpdateCard> = ({ cardData, id, collection }) => {
    const { handleSubmit, register } = useForm();
    const router = useRouter();
    const dispatch = useAppDispatch();    

    const item_ua = cardData?.body[0];
    const item_ru = cardData?.body[1];
    const item_en = cardData?.body[2];

    const onSubmit = (data: IFormData) => {
        const newData: INewCardData = CardData(data);
        console.log(newData)
        // updateData(newData, id, collection)
        //     .then((data) => {
        //         if (data.matchedCount) {
        //             dispatch(updateCardItem({ data: newData, id }));
        //             router.push("/admin");
        //             toast.success("Successfully update data in database");
        //         } else toast.error("Can't update position in database");
        //     })
        //     .catch(function (error) {
        //         console.warn(error.message);
        //         toast.error("Can't update position in database");
        //     });
    };

    const onDelete = () => {
        console.log("Видалити: ", id, collection);
        // deleteData(id, collection)
        //     .then((data) => {
        //         if (data.deletedCount) {
        //             dispatch(deleteCardItem(id));
        //             router.push("/admin");
        //             toast.success("Successfully deleted data from database");
        //         } else toast.error("Can't deleted data from database");
        //     })
        //     .catch(function (error) {
        //         console.warn(error.message);
        //         toast.error("Can't deleted data from database");
        //     });
    };

    return (
        <Container sx={{ my: 2 }}>
            {cardData &&
                <Box onSubmit={handleSubmit(onSubmit)} component="form">
                   
                    <CardForm cardData={cardData} register={register} />

                    <Box sx={{ textAlign: "center", mb: 4 }}>
                        <Button color="error" sx={{ mx: 2 }} onClick={onDelete}>
                            Видалити
                        </Button>
                        <Link href="/admin">
                            <Button sx={{ mx: 2, color: "#898989" }}>
                                Відмінити
                            </Button>
                        </Link>
                        <Button type="submit" sx={{ mx: 2 }}>
                            Підтвердити
                        </Button>
                    </Box>
                </Box>
            }
        </Container>
    );
};

export default UpdateCard;
