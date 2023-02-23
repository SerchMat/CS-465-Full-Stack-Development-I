/* GET homepage */
const index = (req, res) => {
    res.render('index', {title : 'Travlr Gateaways' });
};
module.exports = {
    index
};