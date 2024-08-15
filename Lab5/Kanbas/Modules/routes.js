// import db from "../Database/index.js";

// export default function ModuleRoutes(app) {

//     app.put("/api/modules/:mid", (req, res) => {
//         const { mid } = req.params;
//         const moduleIndex = db.modules.findIndex(
//           (m) => m._id === mid);
//         db.modules[moduleIndex] = {
//           ...db.modules[moduleIndex],
//           ...req.body
//         };
//         res.sendStatus(204);
//     });

//     app.delete("/api/modules/:mid", (req, res) => {
//         const { mid } = req.params;
//         db.modules = db.modules.filter((m) => m._id !== mid);
//         res.sendStatus(200);
//     });

//     app.post("/api/courses/:cid/modules", (req, res) => {
//         const { cid } = req.params;
//         const newModule = {
//           ...req.body,
//           course: cid,
//           _id: new Date().getTime().toString(),
//         };
//         db.modules.push(newModule);
//         res.send(newModule);
//     });

//     app.get("/api/courses/:cid/modules", (req, res) => {
//         const { cid } = req.params;
//         const modules = db.modules.filter((m) => m.course === cid);
//         res.json(modules);
//     });
// }


import * as dao from "./dao.js";

export default function ModuleRoutes(app) {

    const updateModule = async (req, res) => {
        const { mid } = req.params;
        console.log("updateModule", mid);
        const status = await dao.updateModule(mid, req.body);
        res.sendStatus(204); // No content to send back, just indicate success
    };

    const deleteModule = async (req, res) => {
        const { mid } = req.params;
        const status = await dao.deleteModule(mid);
        res.sendStatus(200); // Successfully deleted
    };

    const createModule = async (req, res) => {
        const { cid } = req.params;
        const newModule = {
            ...req.body,
            course: cid
        };
        const createdModule = await dao.createModule(newModule);
        res.json(createdModule);
    };

    const findModulesByCourse = async (req, res) => {
        const { cid } = req.params;
        const modules = await dao.findModulesByCourse(cid);
        res.json(modules);
    };

    app.put("/api/modules/:mid", updateModule);
    app.delete("/api/modules/:mid", deleteModule);
    app.post("/api/courses/:cid/modules", createModule);
    app.get("/api/courses/:cid/modules", findModulesByCourse);
}
