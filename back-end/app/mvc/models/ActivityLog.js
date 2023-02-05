const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
$table->bigIncrements('id');
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('action');
            $table->string('source');
            $table->string('ip_address');
            $table->string('location');
            $table->timestamps();
* */
const activityLogSchema = new Schema({

});

module.exports = mongoose.model('ActivityLog', activityLogSchema);