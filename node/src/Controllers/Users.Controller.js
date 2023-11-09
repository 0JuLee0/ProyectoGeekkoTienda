const userCtrl = {};

const User = require('../Models/Users')


userCtrl.getUsers = async (req,res)=>{
    const users = await User.find();
    res.json(users)
};

userCtrl.getUser = async(req,res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
};

userCtrl.createUsers= async(req,res)=>{
    const {name,surname,password,email} = req.body;
    const newUser = new User({
        name: name,
        surname: surname,
        password: password,
        email: email
    });
    await newUser.save();
    res.json({message: 'User created'});
};

userCtrl.updateUsers = async(req,res)=>{
    const {name,surname,email,password} = req.body;
    await User.findOneAndUpdate({_id:req.params.id},{
        name,
        surname,
        email,
        password
    });
    res.json({message: 'User updated'});
};

userCtrl.deleteUsers = async (req,res)=>{
    await User.findOneAndDelete(req.params.id);
    res.json({message:'user Deleted'})
};


module.exports = userCtrl;