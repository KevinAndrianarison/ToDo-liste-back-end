import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  commentaire: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("todos", todoSchema);

/// Document dans document <---> Schema dans Schema
// const blogSchema = new mongoose.Schema({
//   titre: {
//     type: String,
//     required: true, /// Obligatoire
//     uppercase: true, /// Uppercase --- lowercase
//     trim: true,
//     minlength: 2,
//     maxlength: 20,
//   },
//   contenu: String,
//   estArchive: Boolean,
//   nbreLecture: {
//     type: Number,
//     min: 0,
//   },
//   categories: [
//     {
//       type: String,
//       enum: ["Tana", "Tamatave"], //// Select - Option
//     },
//   ],
//   featuredBlog: mongoose.Types.ObjectId, //// _id
//   auteur: {
//     nom: String,
//     adresse: String,
//   },
//   datePublie: {
//     type: Date,
//     default: Date.now(), /// Instant
//   },
// });
