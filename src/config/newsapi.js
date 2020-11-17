const newsApi = {
  key: process.env.REACT_APP_NEWSAPI_KEY,
  urls: [
    {
      top: `http://newsapi.org/v2/top-headlines?apiKey=${this.key}`,
    },
    {
      latest: `http://newsapi.org/v2/everything?q=health&sortBy=publishedAt&apiKey=${this.key}`,
    },
    {
      uk: `http://newsapi.org/v2/top-headlines?country=uk&apiKey=${this.key}`,
    },
    {
      bbc: `http://newsapi.org/v2/top-headlines?sources=bbc&apiKey=${this.key}`,
    },
    {
      biz: `http://newsapi.org/v2/everything?q=business&sortBy=publishedAt&apiKey=${this.key}`,
    },
    {
      showBiz: `http://newsapi.org/v2/everything?q=entertainment&sortBy=publishedAt&apiKey=${this.key}`,
    },
    {
      health: `http://newsapi.org/v2/everything?q=health&sortBy=publishedAt&apiKey=${this.key}`,
    },
    {
      sport: `http://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&apiKey=${this.key}`,
    },
    {
      tech: `http://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&apiKey=${this.key}`,
    },
  ],
};

export default newsApi;
