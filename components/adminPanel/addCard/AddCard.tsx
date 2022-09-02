import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from '@apollo/client';
import { toast } from "react-toastify";

import { Container, Box, Button } from "@mui/material";

import { CardData } from "../formData/CardData";
import CardForm from "../cardItems/CardForm";
import Spinner from "../../spinner/Spinner";

import { ICard, INewCardData } from "../../../types/cardType";
import { GET_ALLLIST } from "../../../apollo/catalog";
import { INSERT_COFFEE_ITEM, INSERT_TEA_ITEM, INSERT_JAM_ITEM, INSERT_MILLS_ITEM } from "../../../apollo/insertItem"

interface IFormData {
    [key: string]: string
}

interface IAddCard {
    cardData: ICard
}

const AddCard: React.FC<IAddCard> = ({ cardData }) => {
    const { handleSubmit, register } = useForm();
    const router = useRouter();
    
    const [InsertCoffeeItem, { data: CoffeeData, loading: CoffeeLoading, error: CoffeeError }] = useMutation(INSERT_COFFEE_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });
    const [InsertTeaItem, { data: TeaData, loading: TeaLoading, error: TeaError }] = useMutation(INSERT_TEA_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });
    const [InsertJamItem, { data: JamData, loading: JamLoading, error: JamError }] = useMutation(INSERT_JAM_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });
    const [InsertMillsItem, { data: MillsData, loading: MillsLoading, error: MillsError }] = useMutation(INSERT_MILLS_ITEM, {
        refetchQueries: [{ query: GET_ALLLIST }]
    });

    useEffect(() => {
        if (CoffeeData || TeaData || JamData || MillsData) {
            console.log(CoffeeData);
            router.push("/admin");
            toast.success("Successfully add data to database");
        }
    }, [CoffeeData, JamData, MillsData, TeaData, router]);

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

    const onSubmit = (data: IFormData) => {
        const newData: INewCardData = CardData(data);
        console.log(newData)
        const variables = {            
            insert: newData
        }              
        if (cardData.__typename === "Coffeelist_multilang") {
            InsertCoffeeItem({ variables })
        };
        if (cardData.__typename === "Tealist_multilang") {
            InsertTeaItem({ variables })
        };
        if (cardData.__typename === "Jamlist_multilang") {
            InsertJamItem({ variables })
        };
        if (cardData.__typename === "Millslist_multilang") {
            InsertMillsItem({ variables })
        }        
    };

    if (CoffeeLoading || TeaLoading || JamLoading || MillsLoading) return <Spinner />;

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
