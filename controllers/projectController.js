const Project = require("../models/Project")

exports.addProject = async (req,res)=>{

try{

const project = new Project(req.body)

await project.save()

res.json(project)

}catch(error){

res.status(500).json(error)

}

}

exports.getProjects = async (req,res)=>{

const projects = await Project.find()

res.json(projects)

}