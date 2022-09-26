const Accessory = require('../models/Accessory')

exports.create = (accessoryData) => Accessory.create(accessoryData);

exports.getAll = () => Accessory.find();

exports.getAllWithout = (ids) => Accessory.find({_id: {$nin: ids}})