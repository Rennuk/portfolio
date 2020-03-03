exports.getIndex = (req, res, next) => {
    res.render('sitePages/index', {
        pageTitle: 'Homepage',
        path: '/'
    });
}