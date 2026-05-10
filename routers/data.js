require("dotenv").config()
const mongoose = require("mongoose");

async function connect() {
  await mongoose.connect(`mongodb+srv://abhinavkhatri25_db_user:${process.env.pass_db}@cluster0.okvlz2f.mongodb.net/`,
  );

  console.log("connected");
}

const schema = mongoose.Schema({
  title: String,
  author: String,
  rating: Number,
});
const animes = mongoose.model("animes", schema);

async function display() {
  // await animes.updateMany({title: "Berserk"}, { $unset:{ rank: 1} });
  // console.log(await animes.find({ title: "Berserk" }));

  await animes.deleteMany({title: "Apples & Oranges"})

}

connect();
display();
module.exports=animes;