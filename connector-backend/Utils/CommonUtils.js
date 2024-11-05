function get_current_date(){
    var date = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();

    return date;
}

function get_current_time(){
    var time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();

    return time;
}

function get_current_datetime(){
    var date = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();
    var time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();

    return date + " - " + time;
}

module.exports = {get_current_date, get_current_time, get_current_datetime}