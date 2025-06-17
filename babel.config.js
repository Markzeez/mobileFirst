module.exports = function (api) {
    api.cache(true);
    return {
        Presets: [
            ["babel-preset-expo", { jsxImportSource:"nativewind"}],
            "nativewind/babel",
        ],
    };
};