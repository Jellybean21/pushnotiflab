/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// TODO 3.8 - push a message using the web push library
const webPush = require('web-push');
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fst7JQrh48o:APA91bEceYyHOlRRMt41gwTrpCehngIitog8n6ZRL7IRCn1XJut5qyzVuLsq3gq-MbDfNa474dx19pTo9SGGCssS0fKHr-0j7lLMA9GKVBiBDpj-U7LQPzlcwXyGwmCay_I0UD55Tlp0","expirationTime":null,"keys":{"p256dh":"BO9YHA7evGrqeUp8Rq2afEEdI-GdMJxe3VqtEZk6GOgt1OKYPlj_avLipiNgH3W_dEhpyVqyAU_laF112FsaGI4","auth":"dUIqu-Tp6ECmBZPSObzBfQ"}};
// TODO 4.3a - include VAPID key
const vapidPublicKey = 'BK1jkSwGpNhSyPIeAdiB9EwB4NA6FQdI9kBf7nRmwCs34e1z1BvEeXT5XUJ9AK6VT1XxkGAufxiezPCzhDtO4qI';
const vapidPrivateKey = '0eEoVZQSgOItU0v5AX5bXmfQxHSepQ8RhtJvDedQEJg';

const payload = 'Here is your payload';
const options = {
  //gcmAPIKey: 'AAAAQgsFH5s:APA91bFz5vF23moVGMfYW8gYm8y3lm20trvbeiFx_iNTLwOmrObf-6rc8w8cJGJ1VvvQ32mlADglMugvwJoSG3TX8wPDMhejqjr1_AXVd9_eyM2QD7LSYBviAoGXDIDLzrht46u3M7zj',
  TTL: 60,

  // TODO 4.3b add VAPID details
  vapidDetails: {
    subject: 'mailto: david.j@codeur.online',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey,
  }
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
