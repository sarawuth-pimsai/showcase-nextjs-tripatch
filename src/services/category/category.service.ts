import config from "configs";

const getCategory = async () => {};
const getCategories = async () => {
  const url = `${config.baseAPI}/category.json`;
  const response = await fetch(url);
  if (!response.ok)
    return { error: { code: response.status, message: response.statusText } };
  const jsonData = await response.json();
  return jsonData.pageProps;
};

const categoryService = { getCategory, getCategories };

export default categoryService;
