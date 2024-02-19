import React, { useEffect, useState } from 'react';
import { API } from '../../API/index'
import Output from '../Output/Output';
import Pagination from '@mui/material/Pagination';
// import video from '../../assets/video/rick.mp4'

const Main = () => {
    const [data, setData] = useState([])
    const [pagesCount, setPagesCount] = useState(20)
    const [currentPage, setCurrentPage] = useState(1)

    const getPersons = async () => {
        const req = await fetch(API + currentPage)
        const res = await req.json()
        setData(res.results);
        setPagesCount(Math.ceil(res.info.count / res.info.pages))
        console.log(res);
    }

    const togglePage = (e, page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        getPersons()
    }, [currentPage])

    return (
        <div>
            <Output data={data} />
            <Pagination
                onChange={togglePage}
                count={pagesCount} color="secondary" />
        </div>
    );
};

export default Main;