const UserModel = require('../models/user');

   
exports.getUsers = async (req,res) => {
    try {
        const users = await UserModel.getAllUsers();
        res.status(200).json(users[0]);
    } catch (error) {
        console.error('Error in getUsers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


exports.getUser = async (req, res) => {
    const {id} = req.query;

    try{
        if (!id) {
            res.status(422).json({ error: 'ID Required' });
        } else {
            const user = await UserModel.getUserById(id);
            if(user[0].length === 0){
                res.status(404).json({ error: `User with ID ${id} not found` });
            } else {
                res.status(200).json(user[0]);
            }   
        }
    } catch (error) {
        console.error('Error in getUser:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.addUser =  async (req, res) => {
    const { name, address } = req.body;
    //console.log('Received request body:', req.body);

    try{
        if (!name || !address) {
            res.status(422).json({ error: 'Name and address are required.' });
        } else {
            const user = await UserModel.createUser(name, address);
            res.status(200).json({ message: "data Entered successfully",name, address });
        }
    } catch (error) {
        console.error('Error in addUser:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteUser = async (req,res) => {
    const {id} = req.query;

    try {
        if(!id){
            res.status(422).json({ error: 'ID Required'});
        } else {
            const user = await UserModel.getUserById(id);
            if(user[0].length === 0){
                res.status(404).json({ error: `User with ID ${id} not found` });
            } else {
                await UserModel.deleteUser(id);
                res.status(200).json({ message: `User with ID ${id} deleted` });
            }}
        } catch (error) {
        console.error('Error in deleteUser:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

