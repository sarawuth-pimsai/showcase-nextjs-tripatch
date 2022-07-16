import config from "configs";
import parseQueryString from "@utils/parseQueryString";

const getBlogByCategory = async (category: string) => {
  const queryString = parseQueryString({ category });
  const response = await fetch(`${config.baseAPI}/blogs.json?${queryString}`);
  if (!response.ok)
    return { error: { code: response.status, message: response.statusText } };
  const jsonData = await response.json();
  return jsonData.pageProps.blogs;
};
export default getBlogByCategory;
