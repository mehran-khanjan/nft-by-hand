const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const platformRoles = require('../../utils/roles');

/*
* $table->bigIncrements('id');
            $table->string('first_name');
            $table->string('last_name');
            $table->text('bio')->nullable();
            $table->string('email', 180)->unique();
            $table->string('reset_code', 180)->unique()->nullable();
            $table->integer('role')->default(2);
            $table->integer('status')->default(1);
            $table->string('country_code')->nullable();
            $table->string('phone')->nullable();
            $table->tinyInteger('phone_verified')->default(0);
            $table->string('country')->nullable();
            $table->tinyInteger('gender')->default(1);
            $table->string('birth_date')->nullable();
            $table->string('photo')->nullable();
            $table->string('cover_photo')->nullable();
            $table->string('website')->nullable();
            $table->enum('g2f_enabled',[0,1]);
            $table->string('google2fa_secret')->nullable();
            $table->tinyInteger('is_verified')->default(0);
            $table->string('password');
            $table->string('language')->default('en');
            $table->string('device_id')->nullable();
            $table->tinyInteger('device_type')->default(1);
            $table->tinyInteger('push_notification_status')->default(1);
            $table->tinyInteger('email_notification_status')->default(1);
            $table->tinyInteger('new_bid_notification')->default(1);
            $table->tinyInteger('item_purchased_notification')->default(1);
            $table->tinyInteger('people_follow_notification')->default(1);
            $table->rememberToken();
            $table->timestamps();
* */
const userSchema = new Schema({
    nonce: {
        type: String,
        required: true
    },
    // implement this feature
    // one user can save multiple public addresses!
    publicAddress: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: platformRoles.roles
    },
    username: {
        type: String
    },
    email: {
        type: String,
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);