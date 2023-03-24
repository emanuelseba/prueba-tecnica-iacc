import moment from 'moment';

export const getStudentsDTO = (student) => {
    return {
        id: student.id,
        name: student.name,
        rut: student.rut,
        email: student.email
    }
};

export const getStudentsByCareerDTO = (student) => {
    const date = new Date(student.careers_students.createdAt);
    const dateUpdate = moment(date).format('DD/MM/yyyy HH:ss');

    return {
        id: student.id,
        name: student.name,
        rut: student.rut,
        email: student.email,
        dateInscription: dateUpdate
    }
};

export const getStudentsResponseDTO = (students) => 
    {
       const responseDto = []; 
       for(const s in students){
        responseDto.push(getStudentsDTO(students[s]));
       }
     return responseDto;
    };

export const getStudentsByCareerResponseDTO = (studentsReq) => 
    {
       const students = studentsReq[0].students; 
       const responseDto = []; 
       for(const s in students){
        responseDto.push(getStudentsByCareerDTO(students[s]));
       }
     return responseDto;
    };