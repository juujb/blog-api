const { BlogPost, Category, User } = require('../models');

const create = async ({ id, title, content, categoryIds }) => {
  const post = await BlogPost.create({ userId: id, title, content });

  const category = await Category.findAll({ where: { id: categoryIds } });

  console.log(category);
  if (category.length === 0) {
    return { code: 400, message: '"categoryIds" not found' };
  }

  return { code: 201, post };
};

const getAll = async () => {
/* Para a seguintes linhas usei a discussão: https://gist.github.com/zcaceres/83b554ee08726a734088d90d455bc566?permalink_comment_id=2955871#gistcomment-2955871
em tentativa e erro para consertar os erros de sintaxe cometidos consultei o repositório do Michael Caxias:
https://github.com/tryber/sd-014-b-project-blogs-api/blob/a6a3578e036b9086e590cd1bc7218d144522f5dd/services/BlogPostServices.js 
que teve mesma idéia e conseguiu executar sem erros */
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { code: 200, posts };
};

module.exports = { create, getAll };