import React from 'react';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { Container } from '@material-ui/core';

import style from "./style"

const Pagination = props => {
    const { current_page, total_pages } = props.pagination;
    const classes = style();

    const handlePagination = (event, newPage) => {
        props.click(newPage);
    };
    
    let ToggleItens = [];
    for (let index = 1; index <= total_pages; index++) {
        ToggleItens.push(
            <ToggleButton value={index} key={index} aria-label="centered" >
                {index}
            </ToggleButton>
        );
    }

    return (
        <Container className={classes.container}>
            <ToggleButtonGroup
                value={current_page}
                exclusive
                onChange={handlePagination}
                aria-label="text alignment"
            >
                {ToggleItens}

            </ToggleButtonGroup>
        </Container>
    );
}

export default Pagination;
