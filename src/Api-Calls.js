import request from 'superagent'

const backendURL = `https://glacial-lake-69827.herokuapp.com`; 

//goes to the detailpage, its just he one exercise 
export const getButterfly = async (butterflyId) => {
    const data = await request.get(`${backendURL}/butterflies/${butterflyId}`)
    return data.body; 
}

//goes to the butterfly list, displays all the lists 
export const getButterflies = async () => {
    const data = await request.get(`${backendURL}/butterflies/`)
    return data.body; 
}

//add butterfly, goes to the admin page 
export const addButterfly = async (butterfly) => {
    const data = await request.post(`${backendURL}/butterflies/`, butterfly)
    return data.body; 
}