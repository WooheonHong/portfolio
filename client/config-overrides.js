const {
    addWebpackAlias,
    override
} = require("customize-cra");
const path = require("path");

const resolve = (src) => path.resolve(__dirname, src);

module.exports = override(
    addWebpackAlias({
        "@": resolve("src"),
        "@Pages": resolve("src/Components/Pages/"),
        "@Atoms": resolve("src/Components/Atoms/"),
        "@Molecules": resolve("src/Components/Molecules/"),
        "@Organisms": resolve("src/Components/Organisms/"),
        "@Templates": resolve("src/Components/Templates/"),
        "@Constant": resolve("src/Common/Constant/"),
        "@Style": resolve("src/Common/Style/"),
        "@Util": resolve("src/Common/Util/"),
        "@Type": resolve("src/Common/Type/"),
        "@API": resolve("src/API/"),
        "@Recoil": resolve("src/Recoil/"),
        "@src": resolve("./"),
    })
);