import { Carrers } from '../models/Careers.js';
import { Students } from '../models/Students.js';
import { CareersStudents } from '../models/CareersStudents.js';

import { getStudentsResponseDTO, getStudentsDTO } from '../dto/students.dto.js';

import { verifyToken } from '../middleware/token.js'

export const getStudents = async (req, res) => {
    try {
        const verify = verifyToken(req);
        if (verify) {
            return res.status(401).send({ status: "error", message: verify });
        }

        const students = await Students.findAll();
        res.status(200).send(getStudentsResponseDTO(students));
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createStudent = async (req, res) => {
    try {

        const verify = verifyToken(req);
        if (verify) {
            return res.status(401).send({ status: "error", message: verify });
        }

        const { name, rut, email, carId } = req.body;
        const career = await Carrers.findByPk(carId);

        if (!career) {
            return res.status(400).send({ status: "error", message: "Carrera no existe en los registros" });
        }

        const newStudent = await Students.create({
            name,
            rut,
            email
        });

        const newCareer = await CareersStudents.create({
            careerId: carId,
            studentId: newStudent.id
        });

        res.status(200).send(getStudentsDTO(newStudent));
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getStudentsById = async (req, res) => {
    try {

        const verify = verifyToken(req);
        if (verify) {
            return res.status(401).send({ status: "error", message: verify });
        }

        const { id } = req.params;

        const student = await Students.findByPk(id);

        if (!student) {
            return res.status(400).send({ status: "error", message: "No existe en los registros" });
        }

        res.status(200).send(getStudentsDTO(student));

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateStudent = async (req, res) => {
    try {

        const verify = verifyToken(req);
        if (verify) {
            return res.status(401).send({ status: "error", message: verify });
        }

        const { id } = req.params;

        const student = await Students.findByPk(id);

        if (!student) {
            return res.status(400).send({ status: "error", message: "No existe en los registros" });
        }
        const { name, rut, email } = req.body;

        student.name = name;
        student.rut = rut;
        student.email = email;
        student.save();

        res.status(200).send(getStudentsDTO(student));

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteStudent = async (req, res) => {
    try {

        const verify = verifyToken(req);
        if (verify) {
            return res.status(401).send({ status: "error", message: verify });
        }

        const { id } = req.params;

        const student = await Students.findByPk(id);

        if (!student) {
            return res.status(400).send({ status: "error", message: "No existe en los registros" });
        }

        Students.destroy({
            where: {
                id: id
            }
        })

        res.status(200).send({message:"Usuario eliminado correctamente"});

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};