const mongoose = require('mongoose');

const DB = 'mongodb+srv://deepakdash137:Deep@2003@cluster0.efnjwcs.mongodb.net/Deepak?retryWrites=true&w=majority'
mongoose.connect(DB,{   
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false   
}).then(() => {
    console.log(`connection sucessfull `);
}).catch((e) => {
    console.log(`no connection`);
})