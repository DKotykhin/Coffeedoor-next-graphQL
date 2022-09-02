import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../store/hook";
import { toast } from "react-toastify";

import { Container, Box, Button } from "@mui/material";

import { CardData } from "../formData/CardData";
import { addData } from "../AdminApi";
import { addCardItem } from "../../../store/adminSlice";
import { ICard, INewCardData } from "../../../types/cardType";
import CardForm from "../cardItems/CardForm";

interface IFormData {
    [key: string]: string
}

interface IAddCard {
    cardData: ICard;
    collection: string
}

const AddCard: React.FC<IAddCard> = ({ cardData, collection }) => {
    const { handleSubmit, register } = useForm();
    const router = useRouter();
    const dispatch = useAppDispatch();

    const item_ua = cardData?.body[0];
    const item_ru = cardData?.body[1];
    const item_en = cardData?.body[2];

    const onSubmit = (data: IFormData) => {
        const newData: INewCardData = CardData(data);
        console.log(newData)
        // addData(newData, collection)
        //     .then((data) => {
        //         if (data.insertedId) {
        //             router.push("/admin");
        //             const newItem = { _id: data.insertedId, ...newData };
        //             dispatch(addCardItem(newItem));
        //             toast.success("Successfully add data to database");
        //         } else toast.error("Can't get new id from database");
        //     })
        //     .catch(function (error) {
        //         console.warn(error.message);
        //         toast.error("Can't add new position to database");
        //     });
    };

    return (
        <Container sx={{ my: 2 }}>
            {cardData &&
                <Box onSubmit={handleSubmit(onSubmit)} component="form">

                    <CardForm cardData={cardData} register={register} />

                    <Box sx={{ textAlign: "center", mb: 4 }}>
                        <Link href="/admin">
                            <Button sx={{ mx: 2, color: "#898989" }}>
                                Відмінити
                            </Button>
                        </Link>
                        <Button type="submit" sx={{ mx: 2 }}>
                            Додати нову картку
                        </Button>
                    </Box>
                </Box>
            }
        </Container>
    );
};

export default AddCard;
