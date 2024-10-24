import React from "react";

const Notification = () => {
  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: "New Message from Captain America",
      description: "Avengers Assemble",
      time: "10 mins ago",
    },
    {
      id: 2,
      title: "Avenger Office",
      description: `Don't forget to bring HULK with you.`,
      time: "2 hours ago",
    },
    {
      id: 3,
      title: "Security Alert",
      description: "Spiderman Tried to hack into his own Suit to get additional features",
      time: "Yesterday",
    },
    {
      id: 4,
      title: "System Update",
      description: "A new Suit has been updated in Tony's database",
      time: "3 days ago",
    },
  ];

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">Notifications</h1>

      <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-blue-600">{notification.title}</h3>
            <p className="text-gray-600 mt-2">{notification.description}</p>
            <span className="text-sm text-gray-400 mt-4 block">{notification.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
