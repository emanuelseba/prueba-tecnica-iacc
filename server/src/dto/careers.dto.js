export const getCareersDTO = (career) => {
    return {
        id: career.id,
        name: career.name
    }
};

export const getCareersResponseDTO = (careers) => 
    {
       const responseDto = []; 
       for(const c in careers){
        responseDto.push(getCareersDTO(careers[c]));
       }
     return responseDto;
    };