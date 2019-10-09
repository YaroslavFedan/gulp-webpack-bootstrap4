$(function () {
    initBootstrapScripts();
});
function initBootstrapScripts() {
    $('[data-toggle="popover"]').popover({html:true,  trigger: "hover"});
    $('[data-toggle="tooltip"]').tooltip();
};

function refreshByInterval( interval, elem, callback) {
    setInterval( function(){
        var countDownDate = interval * 60 * 1000 ,
            min = new Date().getMinutes(),
            sec = new Date().getSeconds();
        var now = ((min % interval) * 60 + sec ) * 1000;
        var distance = countDownDate - now;

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        minutes = (parseInt(minutes) < 10) ? "0" + minutes : minutes;
        seconds = (parseInt(seconds) < 10) ? "0" + seconds : seconds;

        if(elem){
            elem.empty().append(minutes +":"+ seconds);
        }

        if (now <= 0) {
            callback.call();
        }
    }, 1000)
}
// (function( $ ) {
//
//     $.fn.reloadByInterval = function _reloadTableByInterval( options, callback) {
//
//         setInterval( function(){
//             let countDownDate = options.min * 60 * 1000;
//             let min = new Date().getMinutes();
//             let sec = new Date().getSeconds();
//             let now = ((min % options.min) * 60 + sec ) * 1000;
//             let distance = countDownDate - now;
//
//             let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//             let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//             minutes = (parseInt(minutes) < 10) ? `0${minutes}`: minutes;
//             seconds = (parseInt(seconds) < 10) ? `0${seconds}`: seconds;
//
//             this.empty().append(`${minutes}:${seconds}`);
//
//             if (now <= 0) {
//                 callback.call();
//             }
//         }, 1000);
//
//     };
//
// })(jQuery);