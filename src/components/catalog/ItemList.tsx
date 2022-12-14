import { useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { motion, AnimatePresence } from "framer-motion";

import { Container, Typography } from "@mui/material";

import Card from "../card/Card";

import FilterItems from "../filters/FilterItems";
import { ICard, IFilter } from "types/cardType";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./ItemList.module.scss";

interface IItemList {
    itemList: ICard[];
    id: string;
    title: string;
    subtitle: string;    
    filterArray?: IFilter[]    
}

const ItemList: React.FC<IItemList> = ({
    itemList,
    id,
    title,
    subtitle,    
    filterArray    
}) => {
    const [list, setList] = useState(itemList);
    const router = useRouter();

    let i: number;
    switch (router.locale) {
        case "ua":            
            i = 0;
            break;
        case "ru":            
            i = 1;
            break;
        case "en":            
            i = 2;
            break;
        default:            
            i = 0;
    }

    const onSelectSort = (sort: string) => {
        let data = itemList;
        if (sort) {
            data = itemList.filter(item => item.body[i].sort?.value === sort);
        }
        setList(data);
    };

    return (
        <Container id={id} maxWidth="xl" className={styles.item_list}>
            <Typography className={styles.item_list_title}>{title}</Typography>
            <Typography className={styles.item_list_subtitle}>
                {subtitle}
            </Typography>
            {filterArray && (
                <FilterItems
                    onSelect={onSelectSort}
                    quantity={list ? list.length : null}
                    filterArray={filterArray}
                />
            )}
            <Swiper
                slidesPerView={1.3}
                spaceBetween={10}                
                breakpoints={{
                    850: {
                        slidesPerView: 2,
                        threshold: 20
                    },
                    1200: {
                        slidesPerView: 3,
                        threshold: 20
                    },
                }}                
                navigation={true}
                modules={[Navigation]}
            >
                <AnimatePresence initial={false}>
                    {list?.map((item: ICard) => (
                        <SwiperSlide key={item._id}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                // transition={{duration: 0.5}}
                            >
                                <Card item={item} i={i} />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </AnimatePresence>
            </Swiper>
        </Container>
    );
};

export default ItemList;
