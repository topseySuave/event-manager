module.exports = {
    extends: "airbnb",
    env: {
        node: true,
        es6: true,
        mocha: true
    },
    rules: {
        "camelcase": 0,
        "one-var": 0,
        "one-var-declaration-per-line": 0,
        "new-cap": 0,
        "no-console": 0,
        "consistent-return": 0,
        "no-param-reassign": 0,
        "comma-dangle": 0,
        "no-unused-vars": 0,
        "react/no-unused-state": 1,
        "react/forbid-prop-types": 0,
        "react/prefer-stateless-function": 1,
        "max-len": 0,
        "no-dupe-keys": 0,
        "no-restricted-globals": 0,
        "no-undef": 0,
        "class-methods-use-this": 0,
        "array-callback-return": 0,
        "prefer-const": 0,
        curly: ["error", "multi-line"],
        "import/no-unresolved": [2, {
            commonjs: true
        }],
        "no-shadow": ["error", {
            allow: ["req", "res", "err", "data"]
        }],
        "valid-jsdoc": ["error", {
            requireReturn: true,
            requireReturnType: false,
            requireParamDescription: false,
            requireReturnDescription: false
        }],
        "require-jsdoc": ["error", {
            require: {
                FunctionDeclaration: false,
                MethodDefinition: false,
                ClassDeclaration: false
            }
        }]
    }
};