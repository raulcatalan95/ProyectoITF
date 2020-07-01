const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const express = require("express");
const cors = require("cors");
const router = express();
router.use(cors({ origin: true }));
/*router.get("/jugadores/:usuario", async (req, res) => {
  const jugador = await admin
    .firestore()
    .collection("jugadores")
    .doc(req.params.usuario)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else {
        console.log("No such document!");
        return {};
      }
    });
  res.send(jugador);
});*/
router.get("/jugadores/:id", async (req, res) => {
  const jugadores = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.params.id)
    .get()
    .then(function(doc) {
      if (doc.exists) {
        return doc.data();
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
  res.send(jugadores);
});
router.post("/jugador", async (req, res) => {
  const jugador = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.body.email)
    .set(req.body.favs)
    .then(() => {
      return "todo bien";
    });
  res.send(jugador);
});
router.put("/jugador/:id", async (req, res) => {
  const jugador = await admin
    .firestore()
    .collection("jugadores")
    .doc(req.params.id)
    .update(req.body)
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else {
        console.log("No such document!");
        return {};
      }
    });
  res.send(jugador);
});
router.delete("/jugador/:id", async (req, res) => {
  const jugador = await admin
    .firestore()
    .collection("jugadores")
    .doc(req.params.id)
    .delete();
  res.send(jugador);
});
exports.jugadores = functions.https.onRequest(router);

