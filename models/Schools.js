const axios = require('axios');
const { promisify } = require('es6-promisify');

const getSchoolData = async function (data) {
    console.log('fetching data');
    const result = await axios.get(`https://api.edlio.com/apps/api/website/${data}`)
        .then(res => {
            if (res.data) {
                // console.log(res.data)
                return res.data;
            }
        }).catch(err => {
            console.log(err);
        });
    return result;
}

const Schools = {
    ids: ['301', '304', '305', '303', '302', '8380'],
    idString: function () {
        return this.ids.toString().replace(new RegExp(',', 'g'), ';');
    },
    // JSON: async function () {
    //     return getSchoolData(this.ids.toString().replace(new RegExp(',', 'g'), ';'));
    // }
}

async function setData() {
    Schools.JSON = await getSchoolData(Schools.idString());
}
setData();



// GET SCHOOLS FROM API 
// const getSchoolData = async (data) => {
//     try {
//         const schoolData = await axios.get(`https://api.edlio.com/apps/api/website/${data}`);
//         return schoolData;
//     } catch (error) {
//         console.log(error);
//     }
// }
// console.log(Schools.JSON);

module.exports = Schools;