import model from "./model.js";


export const createCourse = (course) => {
    console.log("createCourse", course);
    delete course._id; // Remove the _id if it exists to allow MongoDB to generate a new one
    // delete course.number;
    return model.create(course);
};

export const findAllCourses = () => model.find();

export const findCourseById = (courseId) => model.findById(courseId);

export const findCoursesByDepartment = (department) => model.find({ department: department });

export const findCoursesByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return model.find({ name: { $regex: regex } });
};

export const updateCourse = (courseId, course) => {
    return model.updateOne({ _id: courseId }, { $set: course });
};

export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });
