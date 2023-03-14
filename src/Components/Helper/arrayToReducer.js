const arrayToReducer = (objArr = []) => {
    const newDict = {};
    const idArr = [];

    if (objArr && objArr.length > 0) {
        objArr.map((obj) => {
            const objId = obj?._id;
            if (objId) {
                newDict[objId] = obj;
                idArr.push(objId);
            }
        });
    }

    var arrSet = new Set(idArr);

    return {
        newDict,
        idArr: Array.from(arrSet)
    };
};

export default arrayToReducer;
