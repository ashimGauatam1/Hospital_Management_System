import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/auth/getdata');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleEditClick = (user) => {
        setEditUser(user);
        setFormData({ ...user });
    };

    const handleDeleteClick = async (userId) => {
        try {
            await axios.delete(`http://localhost:8080/api/auth/delete/${userId}`);
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSaveClick = async () => {
        try {
            
            await axios.put(`http://localhost:8080/api/auth/update/${editUser._id}`, formData);
            setUsers(users.map(user => (user._id === editUser._id ? formData : user)));
            setEditUser(null);
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return (
        <div className="bg-black text-white min-h-screen py-20">
            <div className="p-6 max-w-6xl mx-auto bg-gray-500 shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold mb-6 text-center text-yellow-500">Admin Panel</h1>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">User List</h2>
                    <table className="min-w-full bg-gray-800 divide-y divide-gray-700">
                        <thead className="bg-gray-900">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">{user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user.type}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user.role}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button
                                            onClick={() => handleEditClick(user)}
                                            className="text-cyan-400 hover:text-cyan-300 mr-4"
                                        >
                                            
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteClick(user._id)}
                                            className="text-red-400 hover:text-red-300"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {editUser && (
                    <div className="mt-6 p-6 border border-gray-700 rounded-lg shadow-md bg-gray-900">
                        <h2 className="text-xl font-semibold mb-4">Edit User</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name || ''}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="type">
                                    Type
                                </label>
                                <input
                                    type="text"
                                    name="type"
                                    value={formData.type || ''}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="role">
                                    Role
                                </label>
                                <input
                                    type="text"
                                    name="role"
                                    value={formData.role || ''}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleSaveClick}
                                className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-500"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={() => setEditUser(null)}
                                className="bg-gray-700 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-600 ml-4"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
