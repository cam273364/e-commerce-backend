const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


router.get('/',async (req, res) => {
  // find all categories
  
  // be sure to include its associated Products
  const categories = await Category.findAll({
    // attributes: ["id", "category_name"],
    include: [{
      model: Product,
      // attributes: ["id", "product_name", "price", "stock", "category_id"]
    }]
  });
  console.log(categories)
  res.json(categories)

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category = await Category.findByPk(req.params.id, {
    include: [{
      model: Product,
    
    }]
  }
)
res.json(category)
});

router.post('/', async (req, res) => {
  // create a new category
  const newCategory = await Category.create(req.body)
  res.json(newCategory)
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  console.log(req.params.id)
  const updatedCategory = await Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  console.log(updatedCategory)
  res.json(updatedCategory)
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const deletedCategory = await Category.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json(deletedCategory)
});

module.exports = router;
