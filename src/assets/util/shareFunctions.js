const Config = require('./config');
const alertify = require('alertifyjs');
alertify.set('notifier', 'position', 'top-right');

class ShareFunction {

    onDevelop() {
        alertify.warning(Config.DEVELOP_MESSAGE);
    }

    generalErrorMessage() {
        alertify.error(Config.GENERAL_ERROR_MESSAGE);
    }
}

module.exports = ShareFunction ;