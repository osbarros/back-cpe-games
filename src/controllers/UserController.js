const UserModel = require("../models/UserModel");
const firebase = require("../utils/Firebase");

module.exports = {
  async create(request, response) {
    try{
      const newUser = request.body;
      const uid = await firebase.createNewUser(newUser.email, newUser.password);

      delete newUser.senha;
      newUser.firebase_id = uid;
      const result = await UserModel.create(newUser);

      return response.status(200).json(result);
    } catch (error) {
      console.warn("User creation failed:", error);
      return response.status(500).json({
        notification: "Internal server error while trying to create User",
      });
    }
  },
  async getById(request, response) {
    try {
      const { user_id } = request.params;
      const result = await UserModel.getById(user_id);

      return response.status(200).json(result);
    } catch (error) {
      console.warn("User getById failed: ", error);
      return response.status(500).json({
        notification: "Internal server error while trying to get User",
      });
      
    }
  },
  async update(request, response) {
    try {
      const { user_id } = request.params;
      const newUser = request.body;
      const result = await UserModel.updateById(user_id, newUser);

      if (result === 0)
        return response.status(400).json({ notification: "user_id not found"});

      return response.status(200).json({notification: "User updated successfully."});
    } catch (error) {
      console.warn("User update failed: ", error);
      return response.status(500).json({
        notification: "Internal server error while trying to update User",
      });
    }
  },
  async delete(request, response) {
    try {
      const { user_id } = request.params;
      const result = await UserModel.deleteById(user_id);

      if (result === 0)
        return response.status(400).json({ notification: "user_id not found"});

      return response.status(200).json({notification: "User deleted successfully."});
    } catch (error) {
      console.warn("User delete failed: ", error);
      return response.status(500).json({
        notification: "Internal server error while trying to delete User",
      });
    }
  },
};