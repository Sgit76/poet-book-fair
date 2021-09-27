import React, { useEffect, useState } from 'react';
import Writerdtails from '../Writerdetails/Writerdtails';

const Writer = () => {
    const [writers , setWriters] = useState([]);
    useEffect(() => {
        fetch('./writersdata.JSON')
        .then(res => res.json())
        .then(data => setWriters(data));
    } , [])
    return (
        <div>
            {
               writers.map(writerinfo => <Writerdtails
               key={writerinfo.key}
               writerinfo={writerinfo}
               ></Writerdtails>) 
            }
        </div>
    );
};

export default Writer;