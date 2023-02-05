const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    decimal('amount', 19, 8);
    unsignedBigInteger('buyer_id')->index();
    unsignedBigInteger('seller_id')->index();
    string('transaction_hash');
    unsignedBigInteger('bid_id')->index()->nullable();
    decimal('fees', 19, 8);
    timestamp('transaction_time');
    tinyInteger('status');
    string('coin_type', 25);
    unsignedBigInteger('coin_id')->index();
    timestamps();
    softDeletes();
*/
const transactionSchema = new Schema({

});

module.exports = mongoose.model('Transaction', transactionSchema);