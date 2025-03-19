import React, { useState, useEffect, useRef } from "react";
import useDebounce from "../hooks/useDebounce";
import Trie from "../utils/trie";

const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  // Use useRef to persist Trie instance across renders
  const trieRef = useRef(new Trie());

  // Fetch user data with native fetch API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();

        // Set user data and populate Trie
        setUsers(data);
        setFilteredUsers(data);

        // Populate Trie only once after data is fetched
        data.forEach((user) => {
          trieRef.current.insert(user.name.toLowerCase());
        });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Filter users using debounced search
  useEffect(() => {
    if (debouncedSearch) {
      const searchResults = users.filter((user) =>
        user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setFilteredUsers(searchResults);
    } else {
      setFilteredUsers(users);
    }
  }, [debouncedSearch, users]);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-50 py-16">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
        Meet Our Users
      </h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-12">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔎 Search users..."
          className="w-full max-w-xl px-6 py-3 text-lg border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:shadow-lg transition-all duration-300"
        />
      </div>

      {/* User Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 md:px-12 lg:px-24">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white bg-opacity-80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 overflow-hidden border border-gray-200"
          >
            <div className="relative">
              <img
                src={`https://i.pravatar.cc/150?img=${user.id}`}
                alt={user.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  ✨ {user.company.catchPhrase}
                </p>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">{user.name}</h3>
              <p className="text-gray-600 mb-2">{user.email}</p>
              <p className="text-sm text-gray-500">
                📞 {user.phone} | 🌐 {user.website}
              </p>
              <div className="mt-4">
                <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                  {user.company.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Users Found */}
      {filteredUsers.length === 0 && (
        <div className="text-center text-lg text-gray-600 mt-8">
          😔 No users found. Try a different search term.
        </div>
      )}
    </div>
  );
};

export default UserSearch;
