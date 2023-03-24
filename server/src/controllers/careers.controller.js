import { Carrers } from '../models/Careers.js';
import { Students } from '../models/Students.js';

import { verifyToken } from '../middleware/token.js';

import {getCareersResponseDTO, getCareersDTO} from '../dto/careers.dto.js';

import { getStudentsByCareerResponseDTO } from '../dto/students.dto.js';


export const getCareers = async (req, res) => {
    try {
        const verify = verifyToken(req);
        if (verify) {
            return res.status(401).send({ status: "error", message: verify });
        }
        const careers = await Carrers.findAll(); 
        res.status(200).send(getCareersResponseDTO(careers));  
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getStudentsByCareer = async (req, res) => {
    try {
        const verify = verifyToken(req);
        if (verify) {
            return res.status(401).send({ status: "error", message: verify });
        }

        const { id } = req.params;
        const students = await Carrers.findAll({
            attributes: [],
            include:[{
                model: Students,
                attributes: ["id","name","rut","email"],
            }],
            where: {
                id: id
              }
        });
        res.status(200).send(getStudentsByCareerResponseDTO(students)); 
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const createCareer =  async (req, res) => {
    try {
        const verify = verifyToken(req);
        if(verify){
            return res.status(401).send({message: verify});
        }
        const { name } = req.body;
        const newCareer = await Carrers.create({
            name: name
        });
        res.status(200).send(getCareersDTO(newCareer)); 
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};