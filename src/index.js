module.exports = function check(str, bracketsConfig) {
    let brc = {
        "}": "{",
        "]": "[",
        ")": "(",
    };

    let st = [];
    for (let i = 0; i < str.length; i++) {
        if (Object.values(brc).includes(str[i])) {
            st.push(str[i]);
        } else {
            if (brc[str[i]] !== st.pop()) {
                return false;
            }
        }
    }
    return st.length === 0;
};
