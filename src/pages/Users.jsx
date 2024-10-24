import React from "react";


const users = [
  {
    id: 1,
    name: "Tony Stark",
    alias: "Iron Man",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rIWZdIa6hfBRsNAFtrRjPFreZQj9Zomtgg&s", 
    themeColor: "bg-red-300", 
  },
  {
    id: 2,
    name: "Steve Rogers",
    alias: "Captain America",
    avatar: "https://rukminim2.flixcart.com/image/850/1000/l4ei1e80/poster/e/z/n/medium-captain-america-poster-with-frame-for-wall-decor-room-original-imagfb99kzdthnfy.jpeg?q=20&crop=false", 
    themeColor: "bg-blue-300", 
  },
  {
    id: 3,
    name: "Thor Odinson",
    alias: "Thor",
    avatar: "https://deadline.com/wp-content/uploads/2024/04/MCDTHTH_EC139.jpg?w=681&h=383&crop=1", 
    themeColor: "bg-yellow-300", 
  },
  {
    id: 4,
    name: "Natasha Romanoff",
    alias: "Black Widow",
    avatar: "https://cdn.marvel.com/content/1x/042_bluebayou_digital_keyart_teaser_r16_lg.jpg", 
    themeColor: "bg-gray-300", 
  },
  {
    id: 5,
    name: "Peter Parker",
    alias: "Spider-Man",
    avatar: "https://variety.com/wp-content/uploads/2023/02/MCDSPMA_SP025.jpg?w=1000&h=667&crop=1", 
    themeColor: "bg-red-300", 
  },
  {
    id: 6,
    name: "Bruce Banner",
    alias: "Hulk",
    avatar: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/e/l/w/medium-poster-design-no-3081-hulk-poster-hulk-posters-for-room-original-imaggbyahnsrq4hn.jpeg?q=90&crop=false", 
    themeColor: "bg-green-300", 
  },
];

const Users = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-white to-gray-200"> 
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Marvel Heroes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 max-w-5xl mx-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className={`rounded-lg shadow-lg p-6 text-center ${user.themeColor} text-gray-800 transform hover:scale-105 transition-transform duration-300`}
          >
            <img
              src={user.avatar}
              alt={user.alias}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-800" 
            />
            <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
            <p className="text-lg italic">"{user.alias}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
