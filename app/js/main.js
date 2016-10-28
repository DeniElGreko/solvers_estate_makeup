var elem;
window.onload = function(){
    header.load();
    document.addEventListener('click', function(e){
        elem = e;
        header.click();
    });
    document.addEventListener('scroll', function(e){
        elem = e;
        header.scroll();
    });
};