const index = (req, res) => {
    res.render('index', {
        title: 'Wi-Find'
    });
};

module.exports = {
    index
};