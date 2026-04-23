"use client";

import { useEffect, useState } from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/admin/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  const filteredUsers = users.filter(
    (u) =>
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      (u.fullName || "").toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">
          Users <span className="text-yellow-400">Management</span>
        </h1>

        <input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-black border border-gray-700 px-4 py-2 rounded-lg text-sm focus:border-yellow-400 outline-none w-full md:w-64"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-[#0c0c0c] p-5 rounded-xl border border-yellow-500/20">
          <p className="text-gray-400 text-sm">Total Users</p>
          <h2 className="text-2xl font-bold text-yellow-400">{users.length}</h2>
        </div>

        <div className="bg-[#0c0c0c] p-5 rounded-xl border border-yellow-500/20">
          <p className="text-gray-400 text-sm">Active Users</p>
          <h2 className="text-2xl font-bold text-yellow-400">{users.length}</h2>
        </div>

        <div className="bg-[#0c0c0c] p-5 rounded-xl border border-yellow-500/20">
          <p className="text-gray-400 text-sm">Admins</p>
          <h2 className="text-2xl font-bold text-yellow-400">
            {users.filter((u) => u.role === "admin").length}
          </h2>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#0c0c0c] border border-yellow-500/20 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-lg font-semibold">
            All Users{" "}
            <span className="text-yellow-400">({filteredUsers.length})</span>
          </h2>
        </div>

        {loading ? (
          <p className="p-6 text-gray-400">Loading users...</p>
        ) : filteredUsers.length === 0 ? (
          <p className="p-6 text-gray-400">No users found</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="bg-black border-b border-gray-800 text-gray-400">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((u) => (
                <tr
                  key={u._id}
                  className="border-b border-gray-900 hover:bg-[#111] transition"
                >
                  <td className="p-4 font-medium">{u.fullName || "N/A"}</td>

                  <td className="p-4 text-gray-300">{u.email}</td>

                  <td className="p-4 capitalize">{u.role || "user"}</td>

                  <td className="p-4">
                    <span className="px-2 py-1 text-xs rounded bg-green-500/20 text-green-400">
                      Active
                    </span>
                  </td>

                  <td className="p-4 text-right space-x-2">
                    <button className="px-3 py-1 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition text-xs">
                      View
                    </button>

                    <button className="px-3 py-1 border border-red-500 text-red-400 rounded hover:bg-red-500 hover:text-white transition text-xs">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Footer */}
      <p className="text-center text-gray-500 text-xs mt-6">
        Admin panel • DigiNxt 🚀
      </p>
      {/* go back */}
      <button
        onClick={() => window.history.back()}
        className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
      >
        Go Back
      </button>
    </div>
  );
}
