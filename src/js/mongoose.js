const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/test", {
    "server": {
        "socketOptions": {
            "keepAlive": 1
        }
    }
});

module.exports = mongoose;