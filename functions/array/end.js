function end ( array ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Legaev Andrey
    // +    revised by: J A R
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   restored by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: end({firstname: 'Kevin', middle: 'van', surname: 'Zonneveld'});
    // *     returns 1: 'Zonneveld'

    var last_elm, key;
    
    // The native .pop() method didn't not work with objects (associative arrays)
    // We need that for PHP compatibility

    if (array.constructor === Array){
        last_elm = array[(array.length-1)];
    } else {
        for (key in array){
            last_elm = array[key];
        }
    }

    return last_elm;
}