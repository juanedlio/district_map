const axios = require('axios');
const schools = require('../js/Schools');

const { promisify } = require('es6-promisify');

const getSchoolData = async function (data) {
    console.log('fetching data');
    const result = await axios.get(`https://api.edlio.com/apps/api/website/${data}`)
        .then(res => {
            if (res.data) {
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
    }
}

async function setData() {
    Schools.JSON = await getSchoolData(Schools.idString());
}
setData();

module.exports = Schools;
