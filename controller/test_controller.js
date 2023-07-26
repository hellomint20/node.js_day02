const member = require("../db/memberDAO.js");

const index = (req, res) =>{
    console.log("==== index 컨트롤러 연결 ===");
    console.log(member);
    res.render("index");
};

const test1 = (req, res) => {
    res.render("test1");
};

const test2 = (req, res) => {
    res.render("test2");
};

module.exports = {index , test1, test2 };
//{}없이 하나만 넘겨주면 router에서 바로 받을 수 있지만, {}사용하면 ctrl.xx 로 받아줘야 함
//{}는 key와 value를 사용해야 함, 
//근데 위처럼 작성하면 key와 value를 동일한 이름으로 사용하겠다는 의미
//router에서는 key 값을 가져가야 함