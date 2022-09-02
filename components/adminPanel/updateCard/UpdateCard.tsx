import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation } from '@apollo/client';

import { Container, Box, Button } from "@mui/material";

import Spinner from "../../spinner/Spinner";
import CardForm from "../cardItems/CardForm";
import { CardData } from "../formData/CardData";
import { UPDATE_COFFEE_ITEM, UPDATE_TEA_ITEM, UPDATE_JAM_ITEM, UPDATE_MILLS_ITEM } from "../../../apollo/updateItem";
import { DELETE_COFFEE_ITEM, DELETE_TEA_ITEM, DELETE_JAM_ITEM, DELETE_MILLS_ITEM } from "../../../apollo/deleteItem";
import { GET_ALLLIST } from "../../../apollo/catalog";
import { ICard, INewCardData } from "../../../types/cardType";

interface IUpdateCard {
    cardData: ICard;
    id: any
}

interface IFormData {
    [key: string]: string
}

const UpdateCard: React.FC<IUpdateCard> = ({ cardData, id }) => {
    const { handleSubmit, register } = useForm();
    const router = useRouter();

    const [UpdateCoffeeItem, { data: CoffeeData, loading: CoffeeLoading, error: CoffeeError }] = useMutation(UPDATE_COFFEE_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });
    const [UpdateTeaItem, { data: TeaData, loading: TeaLoading, error: TeaError }] = useMutation(UPDATE_TEA_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });
    const [UpdateJamItem, { data: JamData, loading: JamLoading, error: JamError }] = useMutation(UPDATE_JAM_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });
    const [UpdateMillsItem, { data: MillsData, loading: MillsLoading, error: MillsError }] = useMutation(UPDATE_MILLS_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });

    const [DeleteCoffeeItem, { data: CoffeeDataDel, loading: CoffeeLoadingDel, error: CoffeeErrorDel }] = useMutation(DELETE_COFFEE_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });
    const [DeleteTeaItem, { data: TeaDataDel, loading: TeaLoadingDel, error: TeaErrorDel }] = useMutation(DELETE_TEA_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });
    const [DeleteJamItem, { data: JamDataDel, loading: JamLoadingDel, error: JamErrorDel }] = useMutation(DELETE_JAM_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });
    const [DeleteMillsItem, { data: MillsDataDel, loading: MillsLoadingDel, error: MillsErrorDel }] = useMutation(DELETE_MILLS_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });

    useEffect(() => {
        if (CoffeeData || TeaData || JamData || MillsData) {
            // console.log(CoffeeData);
            router.push("/admin");
            toast.success("Successfully update data in database");
        }
    }, [CoffeeData, JamData, MillsData, TeaData, router]);

    useEffect(() => {
        if (CoffeeDataDel || TeaDataDel || JamDataDel || MillsDataDel) {
            // console.log(CoffeeDataDel);
            router.push("/admin");
            toast.success("Successfully deleted data from database");
        }
    }, [CoffeeDataDel, JamDataDel, MillsDataDel, TeaDataDel, router]);

    useEffect(() => {
        if (CoffeeError) {
            console.warn(CoffeeError.message);
            toast.error(CoffeeError.message);
        } else if (TeaError) {
            console.warn(TeaError.message);
            toast.error(TeaError.message);
        } else if (JamError) {
            console.warn(JamError.message);
            toast.error(JamError.message);
        } else if (MillsError) {
            console.warn(MillsError.message);
            toast.error(MillsError.message);
        }
    }, [CoffeeError, JamError, MillsError, TeaError])

    useEffect(() => {
        if (CoffeeErrorDel) {
            console.warn(CoffeeErrorDel.message);
            toast.error(CoffeeErrorDel.message);
        } else if (TeaErrorDel) {
            console.warn(TeaErrorDel.message);
            toast.error(TeaErrorDel.message);
        } else if (JamErrorDel) {
            console.warn(JamErrorDel.message);
            toast.error(JamErrorDel.message);
        } else if (MillsErrorDel) {
            console.warn(MillsErrorDel.message);
            toast.error(MillsErrorDel.message);
        }
    }, [CoffeeErrorDel, JamErrorDel, MillsErrorDel, TeaErrorDel])

    const onSubmit = (data: IFormData) => {
        const newData: INewCardData = CardData(data);
        const variables = {
            query: { _id: id },
            set: newData
        }
        // console.log(newData);        
        if (cardData.__typename === "Coffeelist_multilang") {
            UpdateCoffeeItem({ variables })
        };
        if (cardData.__typename === "Tealist_multilang") {
            UpdateTeaItem({ variables })
        };
        if (cardData.__typename === "Jamlist_multilang") {
            UpdateJamItem({ variables })
        };
        if (cardData.__typename === "Millslist_multilang") {
            UpdateMillsItem({ variables })
        };
    };

    const onDelete = () => {
        console.log("Видалити: ", id);
        const variables = {
            delete: { _id: id }
        }
        if (cardData.__typename === "Coffeelist_multilang") {
            DeleteCoffeeItem({ variables })
        };
        if (cardData.__typename === "Tealist_multilang") {
            DeleteTeaItem({ variables })
        };
        if (cardData.__typename === "Jamlist_multilang") {
            DeleteJamItem({ variables })
        };
        if (cardData.__typename === "Millslist_multilang") {
            DeleteMillsItem({ variables })
        };
    };

    if (CoffeeLoading || TeaLoading || JamLoading || MillsLoading || CoffeeLoadingDel || TeaLoadingDel || JamLoadingDel || MillsLoadingDel) return <Spinner />;

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
                            Зберігти
                        </Button>
                    </Box>
                </Box>
            }
        </Container>
    );
};

export default UpdateCard;
