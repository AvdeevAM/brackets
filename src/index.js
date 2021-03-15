module.exports = function check(str, bracketsConfig) {
    let bracketsMap = bracketsConfig.map((el) => el.join(""));
    for (let i = 0; i < bracketsMap.length; i++) {
        if (str.includes(bracketsMap[i])) {
            str = str.replace(bracketsMap[i], "");
            i = -1;
        }
    }
    if (str) return false;
    else return true;
};
