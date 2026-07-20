require("dotenv").config();
const mongoose = require("mongoose");
const dns = require("dns");

// Fix DNS issue on your PC
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const PG = require("./models/PG");

const pgs = [
  {
    title: "Stanza Living Gachibowli",
    location: "Gachibowli, Hyderabad",
    latitude: 17.4435,
    longitude: 78.3772,
    price: 9500,
    description: "Fully furnished PG with WiFi, AC and meals.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    amenities: ["WiFi", "AC", "Food", "Laundry"]
  },
  {
    title: "Zolo Hitech City",
    location: "Hitech City, Hyderabad",
    latitude: 17.4504,
    longitude: 78.3825,
    price: 8500,
    description: "Affordable PG near IT companies.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
    amenities: ["WiFi", "Parking", "Food"]
  },
  {
    title: "Your Space Madhapur",
    location: "Madhapur, Hyderabad",
    latitude: 17.4483,
    longitude: 78.3915,
    price: 11000,
    description: "Premium PG with gym and housekeeping.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
    amenities: ["Gym", "WiFi", "AC", "Laundry"]
  },
  {
    title: "Colive Kondapur",
    location: "Kondapur, Hyderabad",
    latitude: 17.4698,
    longitude: 78.3675,
    price: 9000,
    description: "Modern co-living with furnished rooms.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    amenities: ["WiFi", "Kitchen", "Parking"]
  },
  {
    title: "HelloWorld Living Ameerpet",
    location: "Ameerpet, Hyderabad",
    latitude: 17.4375,
    longitude: 78.4483,
    price: 7800,
    description: "Comfortable PG with daily housekeeping.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    amenities: ["WiFi", "Food", "Laundry"]
  }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected");

    await PG.deleteMany();

    console.log("🗑 Old PGs Deleted");

    await PG.insertMany(pgs);

    console.log("🎉 Sample PGs Inserted Successfully");

    process.exit();

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

seedDB();