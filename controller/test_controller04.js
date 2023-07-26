const service = require("../service/test_service04"); //서비스 인폴트

const index = (req,res)=>{
    const mem = service.index(); //serivce04에서 index내보낸거 받아오기
    res.render("index", {member:mem}); //member, mem으로 받기
}//라우터내용->컨트롤러로

const test1 = (req, res)=>{
    res.render("test1")
}
const test2 = (req, res)=>{
    res.render("test2")
}

module.exports = {index:index, t1:test1, t2:test2};