const core = require('./core');

(async () => {
    let data = await core.getData();
    console.log(data)
})()