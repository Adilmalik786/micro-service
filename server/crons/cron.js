const cron = require('node-cron');
const sequelize = require('../services/sequelize');
const MacServiceSettingsModel = require('../database/models/macservicesettings');

// TODO: Use Logger instead of console

module.exports={

    async run(){
        try{
         const invoiceHeaders = await sequelize.query(`select * from invoice_header Where trackSynced IS null OR trackSynced = 0 limit 5`);
            if(invoiceHeaders && invoiceHeaders.length){
                // call api here
            }
        }catch(error){
            console.log('[cron.js]:', error);
        }
    },

    async start(){
        const  macServiceSettings=  await MacServiceSettingsModel.findOne({where:{category: 'mac'}, attributes:['settings']});
        let cronJobDelay = 10;
        if(macServiceSettings.settings.enabled){
            cronJobDelay = macServiceSettings.settings.timer / 60;
        }        
        return cron.schedule(`*/${cronJobDelay} * * * *`, this.run.bind(this));
    }
}