
let slider = document.querySelector('.slider');
let li = document.querySelectorAll('.navigation ul li');
let index_value = 0;
let top_position = 0;
li.forEach((item, index) => {
    slider.style.height = li[0].clientHeight + 'px';
    slider.style.bottom = top_position + 'px';
    item.onclick = function () {
        slider.style.height = item.clientHeight + 'px';
        index_value = index;
        get_left_position();
        slider.style.top = top_position + 'px';
        top_position = 0;
    }
});
function get_left_position() {
    for (let i = 0; i < index_value; i++) {
        const element = li[i];
        top_position += element.clientHeight;
    }
}







