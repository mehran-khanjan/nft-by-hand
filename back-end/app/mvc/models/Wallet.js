const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
$table->bigIncrements('id');
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->bigInteger('coin_id')->unsigned();
            $table->foreign('coin_id')->references('id')->on('coins')->onDelete('cascade');
            $table->string('address');
            $table->tinyInteger('status')->default(1);
            $table->tinyInteger('is_primary')->default(0);
            $table->decimal('balance',19,8)->default(0);
            $table->decimal('on_hold',19,8)->default(0);
            $table->timestamps();
* */
const walletSchema = new Schema({

});

module.exports = mongoose.model('Wallet', walletSchema);