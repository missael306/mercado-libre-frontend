const Config = require('./config');
const alertify = require('alertifyjs');
alertify.set('notifier', 'position', 'top-right');

class ShareFunction {

    onDevelop() {
        alertify.warning(Config.DEVELOP_MESSAGE);
    }
}

module.exports = ShareFunction ;