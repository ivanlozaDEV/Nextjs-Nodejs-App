require('dotenv').config();
const express = require('express');
const cors = require('cors');
const models = require('../models/models'); // Adjust the path to your models file

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json()); // To parse JSON bodies

// CRUD routes for User
app.get("/api/users", async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await models.User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const user = await models.User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put("/api/users/:id", async (req, res) => {
  try {
    const user = await models.User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating user', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  try {
    const user = await models.User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// CRUD routes for ProductCategory
app.get("/api/categories", async (req, res) => {
  try {
    const categories = await models.ProductCategory.findAll();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/api/categories/:id", async (req, res) => {
  try {
    const category = await models.ProductCategory.findByPk(req.params.id);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    console.error('Error fetching category', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post("/api/categories", async (req, res) => {
  try {
    const category = await models.ProductCategory.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    console.error('Error creating category', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put("/api/categories/:id", async (req, res) => {
  try {
    const category = await models.ProductCategory.findByPk(req.params.id);
    if (category) {
      await category.update(req.body);
      res.json(category);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    console.error('Error updating category', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete("/api/categories/:id", async (req, res) => {
  try {
    const category = await models.ProductCategory.findByPk(req.params.id);
    if (category) {
      await category.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    console.error('Error deleting category', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// CRUD routes for Item
app.get("/api/items", async (req, res) => {
  try {
    const items = await models.Item.findAll();
    res.json(items);
  } catch (error) {
    console.error('Error fetching items', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/api/items/:id", async (req, res) => {
  try {
    const item = await models.Item.findByPk(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    console.error('Error fetching item', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post("/api/items", async (req, res) => {
  try {
    const item = await models.Item.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    console.error('Error creating item', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put("/api/items/:id", async (req, res) => {
  try {
    const item = await models.Item.findByPk(req.params.id);
    if (item) {
      await item.update(req.body);
      res.json(item);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    console.error('Error updating item', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete("/api/items/:id", async (req, res) => {
  try {
    const item = await models.Item.findByPk(req.params.id);
    if (item) {
      await item.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    console.error('Error deleting item', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});