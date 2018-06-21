module.exports = function (req, res, ok){
    if(req.session.userId) {
        return ok();
    } else {
        res.redirect('admin/login');
        return;
    }

}