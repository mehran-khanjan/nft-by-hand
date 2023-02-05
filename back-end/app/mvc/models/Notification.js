const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
* $table->bigIncrements('id');
            $table->bigInteger('user_id')->nullable();
            $table->string('title');
            $table->longText('notification_body')->nullable();
            $table->tinyInteger('status')->default(0);
            $table->tinyInteger('type')->default(0)->comment('Type: Any = 0, transaction = 1, registration = 2');
            $table->timestamps();
* */
const notificationSchema = new Schema({

});

module.exports = mongoose.model('Notification', notificationSchema);