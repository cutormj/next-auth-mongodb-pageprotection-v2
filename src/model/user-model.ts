import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	name:       { type: String, required: true },
	username:   { type: String, unique: false },
  email:      { type: String, required: true },
  image:      { type: String  },

  portfolios: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Portfolio",
    }
  ],

 

      
})

export default mongoose.models.User || mongoose.model('User', userSchema)