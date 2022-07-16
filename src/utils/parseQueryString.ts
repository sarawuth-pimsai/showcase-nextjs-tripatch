const parseQueryString = (params: Record<string, string>): string => {
  let queryString = [];
  for (let k in params) {
    if (params.hasOwnProperty(k)) {
      queryString.push(
        encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
      );
    }
  }
  return queryString.join("&");
};
export default parseQueryString;
