const { badRequestError } = require("../Errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req,res) => {
    const {username, password} = req.body ;

    if(!username || !password){
        throw new badRequestError("Please provide username and password.")
    }

    const id = new Date().getDate();
    const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn: "30d"});

      return res.status(200).json({msg: "User login successful", token});
}

const Dashboard = async (req,res) => {
    const luckyNnumber = Math.floor(Math.random()*100) ;
    
    return res.status(200)
              .json({msg: `Hello, ${req.user.username}`, 
                     secret: `Here is your authorized data, your lucky number is ${luckyNnumber}`});
    
}

module.exports = {
    login,
    Dashboard
}