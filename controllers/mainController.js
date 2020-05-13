const schools = require('../models/Schools');
const boundaries = require('../models/boundaries');

function findSchool(address, boundaries, schoolData) {
    let result = -1;
    boundaries.forEach(function (boundary) {
        if (address.postal_code == boundary.zip || 90210 <= address.postal_code >= 90212) {
            if (address.route == boundary.street || address.route == (`${boundary.dir} ${boundary.street}`)) {
                if (boundary.low <= address.street_number && boundary.high >= address.street_number) {
                    result = schoolData.filter(school => school.id == boundary[address.grade.toLowerCase()])[0];
                    return result;
                }
            }
        }
    });
    return result;
}

exports.homePage = async (req, res) => {
    school = 0;
    res.render('index', { title: "School Finder", school});
}

exports.checkAddress = (req, res) => {
    const schoolData = schools.JSON;
    const address = req.body;
    let results = findSchool(address, boundaries, schoolData.schools);
    let school;

    if (results != -1) {
        // Only pass along essential information
        school = {
            name: results.name,
            www: results.wwwSiteURL,
            location: results.location,
            logo: results.logoUrl,
            banner: results.mastHeadUrl
        }
    } else {
        school = -1;
    }
    res.render('index', { title: "School Finder", school, address});
}


