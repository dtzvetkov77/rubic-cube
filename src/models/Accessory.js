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
    },
    cubes: [
        {
        type: mongoose.Types.ObjectId,
        ref: 'Cube'
        }
    ]
});

accessorySchema.path('imageUrl').validate(function(){
    return this.imageUrl.startsWith('http')
}, 'Image url should be a link')

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;