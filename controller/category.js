
const categoryModel = require('../model/categoryModel');
const serviceModel = require('../model/service.model');
class CategoryController {
    static async createCatgory(req, res) {
        try {
            const { name } = req.body;
            const newCategory = await new categoryModel({ name });
            newCategory.save()
            return res.status(201).json({ newCategory });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    static async updateCatgory(req, res) {
        try {
            const { name } = req.body;
            if (!name) {
                return res.satuts(400).json({ message: "Category name is required" });
            }
            const categoryId = req.params['categoryId'];
            const category = await categoryModel.findById(categoryId);
            if (!category) {
                return res.status(400).json({ message: "Invalid CategoryId" })
            }
            category.name = name;
            category.save();
            return res.status(200).json({ message: "Category updated." })
        } catch (error) {
            return res.status(500).json(error);
        }


    }
    static async deteleCatgory(req, res) {
        try {
            const categoryId = req.params['categoryId'];
            const service = await serviceModel.find({ categoryId: categoryId })
            if (!service) {
                return res.status(400).json({ message: "Category " });
            }
            const categoryData = await categoryModel.findByIdAndDelete(categoryId);
            return res.status(200).json({ message: "category deleted" });
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }

    }
    static async getCatgory(req, res) {
        try {
            const allCategory = await categoryModel.find();
            return res.status(200).json(allCategory)
        } catch (error) {
            return res.status(500).json(error);
        }

    }
}

module.exports = CategoryController;