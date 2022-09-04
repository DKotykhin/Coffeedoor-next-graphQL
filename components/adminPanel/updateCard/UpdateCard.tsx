import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { DocumentNode, useMutation } from '@apollo/client';

import { Container, Box, Button } from "@mui/material";

import Spinner from "../../spinner/Spinner";
import CardForm from "../cardItems/CardForm";
import { CardData } from "../formData/CardData";
import RadioButtonsGroup from "./RadioButtonsGroup";
import ReturnLink from "./ReturnLink";

import { UPDATE_COFFEE_ITEM, UPDATE_TEA_ITEM, UPDATE_JAM_ITEM, UPDATE_MILLS_ITEM } from "../../../apollo/updateItem";
import { DELETE_COFFEE_ITEM, DELETE_TEA_ITEM, DELETE_JAM_ITEM, DELETE_MILLS_ITEM } from "../../../apollo/deleteItem";
import { INSERT_COFFEE_ITEM, INSERT_TEA_ITEM, INSERT_JAM_ITEM, INSERT_MILLS_ITEM } from "../../../apollo/insertItem"
import { GET_ALL_LIST } from "../../../apollo/getCatalog";

import { ICard, INewCardData } from "../../../types/cardType";

interface IUpdateCard {
    cardData: ICard;
    id: string | string[] | undefined
}

interface IFormData {
    [key: string]: string
}
let QUERY_UPD: DocumentNode, QUERY_DEL: DocumentNode, QUERY_INS: DocumentNode;

const UpdateCard: React.FC<IUpdateCard> = ({ cardData, id }) => {
    const [add, setAdd] = useState(false);
    const { handleSubmit, register } = useForm();
    const router = useRouter();

    if (cardData.__typename === "Coffeelist_multilang") {
        QUERY_UPD = UPDATE_COFFEE_ITEM;
        QUERY_DEL = DELETE_COFFEE_ITEM;
        QUERY_INS = INSERT_COFFEE_ITEM;
    } else if (cardData.__typename === "Tealist_multilang") {
        QUERY_UPD = UPDATE_TEA_ITEM;
        QUERY_DEL = DELETE_TEA_ITEM;
        QUERY_INS = INSERT_TEA_ITEM;
    } else if (cardData.__typename === "Jamlist_multilang") {
        QUERY_UPD = UPDATE_JAM_ITEM;
        QUERY_DEL = DELETE_JAM_ITEM;
        QUERY_INS = INSERT_JAM_ITEM;
    } else if (cardData.__typename === "Millslist_multilang") {
        QUERY_UPD = UPDATE_MILLS_ITEM;
        QUERY_DEL = DELETE_MILLS_ITEM;
        QUERY_INS = INSERT_MILLS_ITEM;
    }
    const [UpdateItem, { data: DataUpd, loading: LoadingUpd, error: ErrorUpd }] = useMutation(QUERY_UPD, {
        refetchQueries: [{ query: GET_ALL_LIST }]
    });
    const [DeleteItem, { data: DataDel, loading: LoadingDel, error: ErrorDel }] = useMutation(QUERY_DEL, {
        refetchQueries: [{ query: GET_ALL_LIST }]
    });
    const [InsertItem, { data: DataIns, loading: LoadingIns, error: ErrorIns }] = useMutation(QUERY_INS, {
        refetchQueries: [{ query: GET_ALL_LIST }]
    });

    useEffect(() => {
        if (DataUpd || DataDel || DataIns) {
            router.push("/adminpanel");
        }
        DataUpd && toast.success("Successfully update data in database");
        DataDel && toast.success("Successfully deleted data from database");
        DataIns && toast.success("Successfully add data to database");
    }, [DataUpd, DataDel, DataIns, router]);

    useEffect(() => {
        if (ErrorUpd) {
            console.warn(ErrorUpd.message);
            toast.error(ErrorUpd.message);
        } else if (ErrorDel) {
            console.warn(ErrorDel.message);
            toast.error(ErrorDel.message);
        } else if (ErrorIns) {
            console.warn(ErrorIns.message);
            toast.error(ErrorIns.message);
        }
    }, [ErrorUpd, ErrorDel, ErrorIns]);

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
    if (!cardData) return <ReturnLink />;

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
