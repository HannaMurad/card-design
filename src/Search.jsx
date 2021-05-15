import React,{useEffect, useState} from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Rings from './Rings'

const Search = () => {
    let location = useLocation();
    let params2 = useParams();
    const [name, setName] = useState("");
    useEffect(() => {
        const params = new URLSearchParams(location.search) ;
        const n = params.get("n");
        setName(n);
        
    }, [])
    const getSearchValue = () => {
        const params = new URLSearchParams(location.search) ;
        const n = params2.get("n");
        return n;
    }
    return (
        <>
            <Rings filter="search" search={getSearchValue()}/>
        </>
    )
}

export default Search
