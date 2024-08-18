import mongoose, { Schema, Document, Model } from "mongoose";

interface IWeddingWebsite extends Document {
  initiator: mongoose.Types.ObjectId; // Reference to a user
  introductions: {
    title: string;
    subtitle: string;
  };
  location: string;
  date: Date;
  rsvp: {
    question: string;
    response: string;
  };
  // Add other necessary details for a wedding website
  gallery: string[]; // Array of image URLs
  schedule: {
    event: string;
    time: string;
  }[];
  contact: {
    name: string;
    email: string;
  };
}

const weddingWebsiteSchema: Schema<IWeddingWebsite> = new Schema({
  initiator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  introductions: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  rsvp: {
    question: {
      type: String,
      required: true,
    },
    response: {
      type: String,
      required: true,
    },
  },
  gallery: [
    {
      type: String,
    },
  ],
  schedule: [
    {
      event: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
    },
  ],
  contact: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
});

export const WeddingWebsiteModel: Model<IWeddingWebsite> = mongoose.models.WeddingWebsite || mongoose.model<IWeddingWebsite>("WeddingWebsite", weddingWebsiteSchema);


// const sampleWeddingWebsite = {
//     initiator: "60d0fe4f5311236168a109ca", // Example user ID
//     introductions: {
//       title: "Welcome to Our Wedding",
//       subtitle: "Join us in celebrating our special day",
//     },
//     location: "123 Wedding Venue, City, Country",
//     date: new Date("2024-12-31T00:00:00Z"),
//     rsvp: {
//       question: "Will you be attending?",
//       response: "Yes, I will be there!",
//     },
//     gallery: [
//       "https://example.com/image1.jpg",
//       "https://example.com/image2.jpg",
//     ],
//     schedule: [
//       {
//         event: "Ceremony",
//         time: "4:00 PM",
//       },
//       {
//         event: "Reception",
//         time: "6:00 PM",
//       },
//     ],
//     contact: {
//       name: "John Doe",
//       email: "john.doe@example.com",
//     },
//   };
  