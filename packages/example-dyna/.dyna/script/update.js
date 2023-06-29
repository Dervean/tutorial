var { DynaFallbackGetter, DynaTypingsGetter } = require('@hfe/dyna-cli/dist/node/updator');

var isTest = false

DynaFallbackGetter().then(()=>DynaTypingsGetter(isTest))