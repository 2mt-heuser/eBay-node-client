'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../../lib/eBay-node-client')(clientId, clientSecret);
var utils = require('../../../javaScript/utils');

var inventoryRequest = async function () {
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        limit: '10'
    };
    try {
        var response = await eBay.inventory.getInventoryItems(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

inventoryRequest();
