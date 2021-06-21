export const sortByKey = (...args) => (left, right) => {
    var _a, _b, _c, _d;
    const key = (((_a = args[0]) === null || _a === void 0 ? void 0 : _a.key) || args[0]);
    const reverse = ((_b = args[0]) === null || _b === void 0 ? void 0 : _b.reverse) || false;
    const caseSensitive = ((_c = args[0]) === null || _c === void 0 ? void 0 : _c.caseSensitive) || false;
    const map = ((_d = args[0]) === null || _d === void 0 ? void 0 : _d.map) || null;
    let a = left[key];
    let b = right[key];
    if (map) {
        a = map(a, left);
        b = map(b, right);
    }
    if (!caseSensitive && typeof a === "string" && typeof b === "string") {
        a = a.toLowerCase();
        b = b.toLowerCase();
    }
    if (a === b) {
        if (args.length === 1) {
            return 0;
        }
        return sortByKey(...args.slice(1))(left, right);
    }
    if (reverse) {
        return a > b ? -1 : 1;
    }
    return a > b ? 1 : -1;
};
//# sourceMappingURL=sort-helper.js.map