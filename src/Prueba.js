import React, { useState, useEffect } from 'react';

const [allData,setAllData] = useState([]);
const [filteredData,setFilteredData] = useState(allData);
const handleSearch = (event) =>{

}

useEffect(() => {
}, []);
useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/albums/1/photos')
    }, []);

useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => {
    console.log(response.data)
    setAllData(response.data);
    setFilteredData(response.data);
    })
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
    }, []);