var Tools = function () {
    var removeElement = function (element) {
        element.parentNode.removeChild(element);
    };
    var delegate = function (target, callback) {
        // target = li button
        // callback = function
        return function () {
            if (event.target && event.target.matches(target)) {
                callback(event);
            }
        }
    };


    return {
        delegate: delegate,
        removeElement: removeElement,
    };

} ()