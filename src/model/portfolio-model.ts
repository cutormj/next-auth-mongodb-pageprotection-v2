import mongoose from 'mongoose'

const portfolioSchema = new mongoose.Schema({

    experience: [
        {
          title: { type: String }, // Job title (e.g., "Frontend Developer")
          company: { type: String }, // Company name
          startDate: { type: Date }, // Start date
          endDate: { type: Date }, // End date (can be null for current job)
          description: { type: String }, // Job responsibilities and achievements
        },
      ],
    education: [
        {
          institution: { type: String }, // University or school name
          degree: { type: String }, // Degree obtained (e.g., "Bachelor of Science")
          fieldOfStudy: { type: String }, // Field of study (e.g., "Computer Science")
          graduationYear: { type: Number }, // Graduation year
        },
      ],
    projects: [
        {
          title: { type: String }, // Project title
          description: { type: String }, // Project description
          technologies: [{ type: String }], // Array of technologies used
          url: { type: String }, // Project URL (if applicable)
        },
      ],
    } 
      
)

export default mongoose.models.Portfolio || mongoose.model('Portfolio', portfolioSchema)