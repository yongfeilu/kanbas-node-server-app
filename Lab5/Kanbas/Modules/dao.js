import model from "./model.js";

// Create a new module
export const createModule = (module) => {
    delete module._id; // Remove the _id if it exists to allow MongoDB to generate a new one
    return model.create(module);
};

// Retrieve all modules
export const findAllModules = () => model.find();

// Retrieve a module by its ID
export const findModuleById = (moduleId) => model.findById(moduleId);

// Find modules by course ID
export const findModulesByCourse = (courseId) => model.find({ course: courseId });

// Find modules by partial name match (case-insensitive)
export const findModulesByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return model.find({ name: { $regex: regex } });
};

// Update an existing module by its ID
export const updateModule = (moduleId, module) => {
    return model.updateOne({ _id: moduleId }, { $set: module });
};

// Delete a module by its ID
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
