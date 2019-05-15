module.exports = {
    removeArrayValue: function(array, value) {
        const arr = [];
        for (let i = 0; i < array.length; ++i) {
            if (array[i] !== value)
                arr.push(array[i]);
        }
        return arr;
    }
};