const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
   host: "localhost",
   user: "root",
   password: '23012002',
   database: "bdpatrimonio",  
})

app.post("/login", (req, res) => {
   const { username, password } = req.body;
   const SQL = "SELECT * FROM users WHERE username = ? AND password = ?";
   db.query(SQL, [username, password], (err, result) => {
       if (err) {
           console.error("Erro ao executar consulta de login:", err);
           res.status(500).send("Erro interno do servidor");
       } else {
           if (result.length > 0) {
               // Login bem-sucedido
               res.status(200).send("Login bem-sucedido");
           } else {
               // Credenciais inválidas
               res.status(401).send("Credenciais inválidas");
           }
       }
   });
});

app.get("/itens", (req, res) => {
   let SQL = "SELECT * from listaitens";

   db.query(SQL, (err, result) => {
      if(err) console.log(err);
      else res.send(result);
   })
})

app.post("/item", (req, res) => {
   const { item } = req.body;
   let SQL = "INSERT INTO listaitens (descricao, numserie, patrimonio, secretaria, setor) VALUES (?)";
   db.query(SQL, [Object.values(item)], (err, result) => {
      if (err) {
         console.error("Erro ao inserir dados no banco de dados:", err);
         res.status(500).send("Erro ao inserir dados no banco de dados");
      } else {
         console.log("Dados inseridos com sucesso no banco de dados");
         res.status(200).send("Dados inseridos com sucesso");
      }
   });
});

app.get("/buscar", (req, res) => {
   const { termo } = req.query;
   console.log("Termo de busca:", termo); // Adicionando um log para verificar o termo de busca
   
   let SQL = "SELECT * FROM listaitens WHERE patrimonio = ? OR numserie = ?";
   console.log("Consulta SQL:", SQL); // Adicionando um log para verificar a consulta SQL
   
   db.query(SQL, [termo, termo], (err, result) => {
      if(err) {
         console.error("Erro ao buscar item:", err);
         res.status(500).json({ error: "Erro ao buscar item" });
      } else {
         console.log("Resultado da busca:", result); // Adicionando um log para verificar o resultado da busca
         res.status(200).json(result);
      }
   });
});




app.delete("/item/:id", (req, res) => {
   const { id } = req.params;
   console.log("Informação", id);

   let SQL = "DELETE FROM listaitens WHERE (`id` = ?)";

   db.query(SQL, id, (err, result) => {
      console.log(err);
   })
})

// app.put("/item/:id", (req, res) => {
//    const { id } = req.params;
//    const { descricao, numserie, patrimonio, secretaria, setor } = req.body;

//    let SQL = "UPDATE listaitens SET descricao=?, numserie=?, patrimonio=?, secretaria=?, setor=? WHERE id=?";

//    db.query(SQL, [descricao, numserie, patrimonio, secretaria, setor, id], (err, result) => {
//       if (err) {
//          console.error("Erro ao atualizar item:", err);
//          res.status(500).json({ error: "Erro ao atualizar item" });
//       } else {
//          console.log("Item atualizado com sucesso:", result);
//          res.status(200).json({ message: "Item atualizado com sucesso" });
//       }
//    });
// });



app.listen(3002,"192.168.101.105", () => {
   console.log("rodando servidor!")
});
