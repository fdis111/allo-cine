import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchButton (props) {
    return(
        <div><FontAwesomeIcon icon={faSearch} onClick={ props.onClick } /></div>
    )
}