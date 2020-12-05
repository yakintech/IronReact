

export const getcontacts = async (token) => {

    let contacts = [];

    await fetch("http://localhost:3001/api/contact/?token=" + token)
        .then((res) => res.status === 200 ? res.json() : [])
        .then((result) => {
            contacts = result;
        })
        .catch((err) => {
            console.log(err);
        });


        return contacts
}




