var config = require("../dbconfig");
const sql = require("mssql");
//function to get all users
async function GetAllUsers(req, res, next) {
  try {
    let pool = sql.connect(config, function (error) {
      if (error) {
        console.log(error);
      }

      let sqlRequest = new sql.Request();
      let sqlQuery = "EXEC GetAllUsers";
      sqlRequest.query(sqlQuery, function (error, data) {
        if (error) {
          console.log(error);
        }

        res.send(data.recordset);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

//signup function
async function SignUpUser(req, res, next) {
  let { UserName, UserPassword } = req.params;

  let pool = sql.connect(config, function (error) {
    if (error) {
      console.log(error);
    }

    let sqlRequest = new sql.Request();
    let sqlQuery = `EXEC SignUpUser '${UserName}', '${UserPassword}'`;
    sqlRequest.query(sqlQuery, function (error, data) {
      if (error) {
        console.log(error);
      }

      res.send(data.recordset);
    });
  });
}

// login function
async function LoginUser(req, res, next) {
  let { UserName, UserPassword } = req.params;

  let pool = sql.connect(config, function (error) {
    if (error) {
      console.log(error);
    }

    let sqlRequest = new sql.Request();
    let sqlQuery = `EXEC LoginUser '${UserName}', '${UserPassword}'`;
    sqlRequest.query(sqlQuery, function (error, data) {
      if (error) {
        console.log(error);
      }

      res.send(data.recordset);
    });
  });
}

module.exports = {
  GetAllUsers: GetAllUsers,
  SignUpUser: SignUpUser,
  LoginUser: LoginUser,
};
