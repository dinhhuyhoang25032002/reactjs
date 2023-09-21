
import { json } from 'body-parser';
import db from '../models/index';
import CRUDservice from '../services/CRUDservice';




let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDservice.createNewUser(req.body)
    console.log(message)
    return res.send('post crud from server');
}

let displayCRUD = async (req, res) => {
    let data = await CRUDservice.getAllUser();

    return res.render('displayCRUD.ejs', {
        datatable: data
    })
}

module.exports = {
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
}