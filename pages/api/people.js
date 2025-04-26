// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    {
      name: "Shubha Bundela",
      email: "shubhabundela071@gmail.com",
      role: "Fullstack Developer",
      age: "31",
      address: "Delhi NCR, India",
    },
    {
      name: "Test user 1",
      email: "testuser1@gmail.com",
      role: "software Developer",
      age: "28",
      address: "Bhopal, India",
    },
    {
      name: "Test user 2",
      email: "testuser2@gmail.com",
      role: "MERN stack Developer",
      age: "29",
      address: "Pune, India",
    },
    {
      name: "Test user 3",
      email: "testuser3@gmail.com",
      role: "MEAN stack Developer",
      age: "39",
      address: "Dubai, UAE",
    },
  ]);
};
