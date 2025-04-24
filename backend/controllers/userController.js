
const adminLogin = async (req, res) => {
    res.json({success: true, message: "Admin logged in"})
    try{

    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
}
export { adminLogin };