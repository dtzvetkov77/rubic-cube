const mongoose  = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 120
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: /^http?/g,
            message:  'Image url should be link'
        }
    },
    cube: {
        type: mongoose.Types.ObjectId,
        ref: 'Cube'
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;