import { useEffect, useState } from "react";
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

import { UPDATE_COFFEE_ITEM, UPDATE_TEA_ITEM, UPDATE_JAM_ITEM, UPDATE_MILLS_ITEM } from "../../../apollo/updateItem";
import { DELETE_COFFEE_ITEM, DELETE_TEA_ITEM, DELETE_JAM_ITEM, DELETE_MILLS_ITEM } from "../../../apollo/deleteItem";
import { INSERT_COFFEE_ITEM, INSERT_TEA_ITEM, INSERT_JAM_ITEM, INSERT_MILLS_ITEM } from "../../../apollo/insertItem"
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
    const [add, setAdd] = useState(false);
    const { handleSubmit, register } = useForm();
    const router = useRouter();

    const [UpdateCoffeeItem, { data: CoffeeDataUpd, loading: CoffeeLoadingUpd, error: CoffeeErrorUpd }] = useMutation(UPDATE_COFFEE_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });
    const [UpdateTeaItem, { data: TeaDataUpd, loading: TeaLoadingUpd, error: TeaErrorUpd }] = useMutation(UPDATE_TEA_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });
    const [UpdateJamItem, { data: JamDataUpd, loading: JamLoadingUpd, error: JamErrorUpd }] = useMutation(UPDATE_JAM_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });
    const [UpdateMillsItem, { data: MillsDataUpd, loading: MillsLoadingUpd, error: MillsErrorUpd }] = useMutation(UPDATE_MILLS_ITEM, {
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

    const [InsertCoffeeItem, { data: CoffeeDataIns, loading: CoffeeLoadingIns, error: CoffeeErrorIns }] = useMutation(INSERT_COFFEE_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });
    const [InsertTeaItem, { data: TeaDataIns, loading: TeaLoadingIns, error: TeaErrorIns }] = useMutation(INSERT_TEA_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });
    const [InsertJamItem, { data: JamDataIns, loading: JamLoadingIns, error: JamErrorIns }] = useMutation(INSERT_JAM_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });
    const [InsertMillsItem, { data: MillsDataIns, loading: MillsLoadingIns, error: MillsErrorIns }] = useMutation(INSERT_MILLS_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });

    useEffect(() => {
        if (CoffeeDataUpd || TeaDataUpd || JamDataUpd || MillsDataUpd) {
            router.push("/admin");
            toast.success("Successfully update data in database");
        }
    }, [CoffeeDataUpd, JamDataUpd, MillsDataUpd, TeaDataUpd, router]);

    useEffect(() => {
        if (CoffeeDataDel || TeaDataDel || JamDataDel || MillsDataDel) {
            router.push("/admin");
            toast.success("Successfully deleted data from database");
        }
    }, [CoffeeDataDel, JamDataDel, MillsDataDel, TeaDataDel, router]);

    useEffect(() => {
        if (CoffeeDataIns || TeaDataIns || JamDataIns || MillsDataIns) {
            router.push("/admin");
            toast.success("Successfully add data to database");
        }
    }, [CoffeeDataIns, JamDataIns, MillsDataIns, TeaDataIns, router]);

    useEffect(() => {
        if (CoffeeErrorUpd) {
            console.warn(CoffeeErrorUpd.message);
            toast.error(CoffeeErrorUpd.message);
        } else if (TeaErrorUpd) {
            console.warn(TeaErrorUpd.message);
            toast.error(TeaErrorUpd.message);
        } else if (JamErrorUpd) {
            console.warn(JamErrorUpd.message);
            toast.error(JamErrorUpd.message);
        } else if (MillsErrorUpd) {
            console.warn(MillsErrorUpd.message);
            toast.error(MillsErrorUpd.message);
        }
    }, [CoffeeErrorUpd, JamErrorUpd, MillsErrorUpd, TeaErrorUpd])

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
    }, [CoffeeErrorDel, JamErrorDel, MillsErrorDel, TeaErrorDel]);

    useEffect(() => {
        if (CoffeeErrorIns) {
            console.warn(CoffeeErrorIns.message);
            toast.error(CoffeeErrorIns.message);
        } else if (TeaErrorIns) {
            console.warn(TeaErrorIns.message);
            toast.error(TeaErrorIns.message);
        } else if (JamErrorIns) {
            console.warn(JamErrorIns.message);
            toast.error(JamErrorIns.message);
        } else if (MillsErrorIns) {
            console.warn(MillsErrorIns.message);
            toast.error(MillsErrorIns.message);
        }
    }, [CoffeeErrorIns, JamErrorIns, MillsErrorIns, TeaErrorIns])

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
        if (cardData.__typename === "Coffeelist_multilang") {
            add ? InsertCoffeeItem({ variables: ins }) : UpdateCoffeeItem({ variables: edit })
        };
        if (cardData.__typename === "Tealist_multilang") {
            add ? InsertTeaItem({ variables: ins }) : UpdateTeaItem({ variables: edit })
        };
        if (cardData.__typename === "Jamlist_multilang") {
            add ? InsertJamItem({ variables: ins }) : UpdateJamItem({ variables: edit })
        };
        if (cardData.__typename === "Millslist_multilang") {
            add ? InsertMillsItem({ variables: ins }) : UpdateMillsItem({ variables: edit })
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

    const onChange = (data: string) => {
        // console.log(data)
        if (data === 'add') setAdd(true)
        else setAdd(false)
    }

    if (CoffeeLoadingUpd || TeaLoadingUpd || JamLoadingUpd || MillsLoadingUpd) return <Spinner />;
    if (CoffeeLoadingDel || TeaLoadingDel || JamLoadingDel || MillsLoadingDel) return <Spinner />;
    if (CoffeeLoadingIns || TeaLoadingIns || JamLoadingIns || MillsLoadingIns) return <Spinner />;

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
                        <Link href="/admin">
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
