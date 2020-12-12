import { config } from '../env/config'


export const login = async (data) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    let entity = {};

    await fetch(config.url +"/token" , requestOptions)
        .then((res) => res.status === 401 ? undefined  : res.json())
        .then((result) => {
            entity = result;
        })

    return entity;


}