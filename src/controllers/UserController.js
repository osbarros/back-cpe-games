const UserModel = require("../models/UserModel");

module.exports = {
  async create(request, response) {
    try {
      const newUser = request.body;

      const result = await UserModel.create(newUser);
      return response.status(200).json({user_id: result});
    } catch (error) {
      console.warn("User creation failed: ", error);
      return response.status(500).json({
        notification: "Internal server error while trying to create User",
      });
    }
  },
  async getById(request, response) {
    try {
      const { user_id } = request.params;
      const result = await User.getById(user_id);

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
      await UserModel.updateById(user_id, newUser);

      return response.status(200).json({notification: "User updated succesfully."});
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

      await UserModel.deleteById(user_id);
      return response.status(200).json({notification: "User deleted succesfully."});
    } catch (error) {
      console.warn("User delete failed: ", error);
      return response.status(500).json({
        notification: "Internal server error while trying to delete User",
      });
    }
  },
};
