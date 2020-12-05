import moment from 'moment';
import 'moment/locale/tr';

export const getwebusers = async (token) => {
    let data = [];


    await fetch("http://localhost:3001/api/webuser?token=" + token)
        .then((res) => res.status === 200 ? res.json() : [])
        .then((result) => {
            let usersvm = [];
            result.forEach(element => {
                element.adddate = moment(element.adddate).format('DD MMMM YYYY');
                element.phone = "+90" + element.phone;
                element.address1 = element.address[0];
                usersvm.push(element);
            });

            data = usersvm;
        })

    console.log(data);
    return data;


}