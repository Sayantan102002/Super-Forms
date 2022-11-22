const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema(
    {

        email: {
            type: String,
        },

        phone: {
            type: String,
        },

        locationCountry: {
            type: String,
        },
        locationCity: {
            type: String,
        },

        emails: [
            {
                type: String,
            },
        ],

        phones: [
            {
                type: String,
            },
        ],

        model: {
            type: String,
            default: "User",
        },

        displayName: {
            type: String,
            default: "",
        },

        displayPicture: {
            type: Schema.Types.ObjectId,
            ref: "File",
        },
        firebaseUid: {
            type: String,
            required: true,
        },


    },
    {
        timestamps: true,
    }
);

userSchema.index({ location: "2dsphere" });

const User = model("User", userSchema);

module.exports = User;
