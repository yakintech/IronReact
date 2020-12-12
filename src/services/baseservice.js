import { config } from '../env/config'
import { gettoken } from './tokenservice';



export const getall = async (url) => {

    let data = [];

    await fetch(config.url + url + "?token=" + gettoken())
        .then((res) => res.status === 200 ? res.json() : [])
        .then((result) => {
            data = result;
        })
        .catch((err) => {
            console.log(err);
        });

    return data;


}


export const add = async (url, data) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    let entity = {};

   await fetch(config.url + url + "?token=" + gettoken(), requestOptions)
        .then((res) => res.json())
        .then((result) => {
            console.log(result)
            entity = result;
        });

    return entity;
}