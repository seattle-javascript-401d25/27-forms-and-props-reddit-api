import superagent from 'superagent';

/*eslint-disable*/
export const fetchData= (url) => {
  return getCache(url)
    .then(data => data)
    .catch(() => {
      return superagent.get(url)
        .then((result) => {
          console.log(result.body, 'RESULT.BODY');
          setCache(url, result.body);
          return result.body;
        })
        .catch(console.error);
    })
    .then(data => data);
};
