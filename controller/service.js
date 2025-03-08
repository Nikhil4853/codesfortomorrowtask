
const categoryModel = require('../model/categoryModel');
const serviceModel = require('../model/service.model');
const priceModel = require('../model/price.model');
class ServiceController {
    static async createService(req, res) {
        try {
            const categoryId = req.params['categoryId'];
            const { name, type } = req.body;
            const category = await categoryModel.findById(categoryId);
            if (!category) {
                return res.status(400).json({ message: "Invalid Category Id." })
            }
            const service = new serviceModel({ categoryId, name, type });
            service.save();
            //['Hourly', 'Weekly', 'Monthl']

            return res.status(200).json({ message: "Service created." });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    static async getService(req, res) {
        try {
            const categoryId = req.params['categoryId'];
            const services = await serviceModel.find({ categoryId: categoryId })
            if (!services) {
                return res.status(400).json({ message: "Invalid category Id." })
            }
            return res.status(200).json(services)
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    static async updateService(req, res) {
        try {
            const { price, type, duration } = req.body;
            if (!price) {
                return res.status(400).json({ messagge: "price is required." })
            }
            const categoryId = req.params['categoryId'];
            const serviceId = req.params['serviceId'];
            if (!categoryId || !serviceId) {
                return res.status(400).json({ message: "Service id and category id is required." });
            }
            const service = await serviceModel.find({ _id: serviceId, categoryId: categoryId })

            if (!service) {
                return res.status(400).json({ message: "No service found" });
            }
            const priceData = type.map(data => ({
                serviceId: serviceId,
                price: price,
                duration: duration,
                type: data
            }));
            const servicePrice = await priceModel.insertMany(priceData);

            return res.status(200).json({ message: "price option are updated." })
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    }

    static async deleteService(req, res) {
        try {
            const categoryId = req.params['categoryId'];
            const serviceId = req.params['serviceId'];
            const service = await serviceModel.findOneAndDelete({ _id: serviceId, categoryId: categoryId })
            if (!service) {
                return res.status(400).json({ message: "No service found" });
            }
            return res.status(200).json({ message: "service deleted" });
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }
}
module.exports = ServiceController;