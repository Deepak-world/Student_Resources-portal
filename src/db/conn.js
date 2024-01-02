const mongoose = require('mongoose');

const DB = 'mongodb+srv://deepakdash137:Deep@2003@cluster0.efnjwcs.mongodb.net/?retryWrites=true&w=majoritymongodb+srv://deepakdash137:Deep@2003@cluster0.efnjwcs.mongodb.net/Deepak?retryWrites=true&w=majority'

// const DB='mongodb+srv://deepakdash137@gmail.com:Deep@2003@ac-dhyofk8.mongodb.net/Deepak?retryWrites=true&w=majority'


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