var push = require('web-push');

let vapidKeys ={
    publicKey: 'BLo4LyAdCsv2g5p9njRFTXWkaNn0sOZcU07yEsCpjiMQsJxQp9QO12_GE4tGP_-F-arrEJIwaTYW_Nljw9rMp90',
    privateKey: 'gdG5PXqFlXIfgPYPLUSunxxXEVPSZDfhylqkm5oGnDM'
}

push.setVapidDetails('mailto:test@test.co.uk', vapidKeys.publicKey,vapidKeys.privateKey);

let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/dOpGfyOLTdw:APA91bHSosEXvqqAo-DfYTLNo06zOcF7GCLMMJReuBIUidYXFBMH8-yZBI4uyJQ0t0WF_2MRGuGPoln4NkENhs0GisBx42_fjJMiMR-552DCDvy1AZ68x9-WbkjxDHDLjqqLzfAlAc8c",
    expirationTime:null,
    keys:{
        p256dh:"BAQsIVNt90uWr_CTWN-MnKCDRURizZPHd1j-yQT0kl0liX5GLof5OgVaEvJYq8cN-dPsKSfDzvR-s6f_V1q1WRs",
        auth:"r5hUs-8qsWMNmxFiA8QPOg"}
    }

push.sendNotification(sub, 'test message');

