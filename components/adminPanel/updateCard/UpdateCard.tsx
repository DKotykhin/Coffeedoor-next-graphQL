import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation } from '@apollo/client';

import { Container, Box, Button } from "@mui/material";

import Spinner from "../../spinner/Spinner";
import CardForm from "../cardItems/CardForm";
import { CardData } from "../formData/CardData";
import RadioButtonsGroup from "./RadioButtonsGroup";
import QueryConstants from "./QueryConstants";

import { GET_ALL_LIST } from "../../../apollo/query/getCatalog";
import { ICard, INewCardData } from "../../../types/cardType";

interface IUpdateCard {
    cardData: ICard;
    id: string | string[] | undefined
}

interface IFormData {
    [key: string]: string
}

const UpdateCard: React.FC<IUpdateCard> = ({ cardData, id }) => {
    const [add, setAdd] = useState(false);
    const { handleSubmit, register } = useForm();
    const router = useRouter();

    const { QUERY_UPD, QUERY_DEL, QUERY_INS } = QueryConstants(cardData.__typename)

    const [UpdateItem, { loading: LoadingUpd }] = useMutation(QUERY_UPD, {
        refetchQueries: [{ query: GET_ALL_LIST }],
        onCompleted: () => {
            router.push("/adminpanel");
            toast.success("Successfully updated data in database");
        },
        onError: (data) => {
            toast.error(data.message);
        },
    });
    const [DeleteItem, { loading: LoadingDel }] = useMutation(QUERY_DEL, {
        refetchQueries: [{ query: GET_ALL_LIST }],
        onCompleted: () => {
            router.push("/adminpanel");
            toast.success("Successfully deleted data from database");
        },
        onError: (data) => {
            toast.error(data.message);
        },
    });
    const [InsertItem, { loading: LoadingIns }] = useMutation(QUERY_INS, {
        refetchQueries: [{ query: GET_ALL_LIST }],
        onCompleted: () => {
            router.push("/adminpanel");
            toast.success("Successfully added data to database");
        },
        onError: (data) => {
            toast.error(data.message);
        },
    });

    const onSubmit = (data: IFormData) => {
        const newData: INewCardData = CardData(data);
        // console.log(newData);        
        const edit = {
            query: { _id: id },
            set: newData
        }
        const ins = {
            insert: newData
        }
        add ? InsertItem({ variables: ins }) : UpdateItem({ variables: edit })
    };

    const onDelete = () => {
        console.log("Видалити: ", id);
        const variables = {
            delete: { _id: id }
        }
        DeleteItem({ variables })
    };

    const onChange = (data: string) => {
        // console.log(data)
        if (data === 'add') setAdd(true)
        else setAdd(false)
    }

    if (LoadingIns || LoadingDel || LoadingUpd) return <Spinner />;

    return (
        <Container sx={{ my: 2 }}>
            <RadioButtonsGroup onChange={onChange} />
            {cardData &&
                <Box onSubmit={handleSubmit(onSubmit)} component="form">
                    <CardForm cardData={cardData} register={register} />
                    <Box sx={{ textAlign: "center", mb: 4 }}>
                        {!add &&
                            <Button color="error" sx={{ mx: 2 }} onClick={onDelete}>
                                Видалити
                            </Button>
                        }
                        <Link href="/adminpanel">
                            <Button sx={{ mx: 2, color: "#898989" }}>
                                Відмінити
                            </Button>
                        </Link>
                        <Button type="submit" sx={{ mx: 2 }}>
                            {add ? "Додати нову картку" : "Зберігти"}
                        </Button>
                    </Box>
                </Box>
            }
        </Container>
    );
};

export default UpdateCard;
