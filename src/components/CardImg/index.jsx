import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import CardMedia from "@material-ui/core/CardMedia";


const CardImg = props => {
    const [imgUrl, setImgUrl] = useState("");
    const { characterName, className } = props;

    useEffect(() => {
        getImage(characterName)
    }, []);


    const getImage = async (name) => {
        const response = await Axios.get("https://www.googleapis.com/customsearch/v1", {
            params: {
                key: "AIzaSyCJndh_Z04YbVnhZ3s6TA0QcVzQ5RX_PQY",
                cx: "010694824975899644089:m6l68ukm8ma",
                searchType: 'image',
                q: name
            }
        })
        setImgUrl(response.data.items[0].link);
    }
    return (
        <>
            {imgUrl ? (
                <CardMedia
                    className={className}
                    image={imgUrl}
                    title={characterName}
                />
            ) : (
                <CardMedia
                    className={className}
                    image={'https://bulma.io/images/placeholders/1280x960.png'}
                    title="Image default"
                />
                )}
        </>
    )
}

export default CardImg;