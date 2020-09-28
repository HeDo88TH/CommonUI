export default {
    // getCurrentPosition: function(){
    //     return position;
    // },

    on: function(eventName, handler){
        window.addEventListener(eventName, handler);
    },

    off: function(eventName, handler){
        window.removeEventListener(eventName, handler);
    },

    intersects: function(mouseEvent, domElement){
        const rect = domElement.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop,
            top = rect.top + scrollTop,
            left = rect.left + scrollLeft,
            bottom = top + domElement.clientHeight,
            right = left + domElement.clientWidth;

        return (mouseEvent.clientX >= left && 
                mouseEvent.clientX <= right &&
                mouseEvent.clientY >= top &&
                mouseEvent.clientY <= bottom);
    },

    LEFT: 1,
    RIGHT: 3,
};

