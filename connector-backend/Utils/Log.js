class Log {
    constructor() {
        this.fs = require('fs');
    }

    write_api_call_log(call_log){
        call_log += "\n";

        this.fs.appendFile(process.env.API_LOG_FILE_PATH, call_log, (err) => {
            if (err) throw err;
        });
    }
}

module.exports = Log;
