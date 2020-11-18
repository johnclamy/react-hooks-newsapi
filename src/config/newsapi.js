const newsApi = {
  key: process.env.REACT_APP_NEWSAPI_KEY,
  url: 'http://newsapi.org/v2/',
  qry: [
    {
      top: `${this.url}top-headlines?apiKey=${this.key}`,
    },
    {
      latest: `${this.url}everything?q=health&sortBy=publishedAt&apiKey=${this.key}`,
    },
    {
      uk: `${this.url}top-headlines?country=uk&apiKey=${this.key}`,
    },
    {
      bbc: `${this.url}top-headlines?sources=bbc&apiKey=${this.key}`,
    },
    {
      biz: `${this.url}everything?q=business&sortBy=publishedAt&apiKey=${this.key}`,
    },
    {
      showBiz: `${this.url}everything?q=entertainment&sortBy=publishedAt&apiKey=${this.key}`,
    },
    {
      health: `${this.url}everything?q=health&sortBy=publishedAt&apiKey=${this.key}`,
    },
    {
      sport: `${this.url}everything?q=sports&sortBy=publishedAt&apiKey=${this.key}`,
    },
    {
      tech: `${this.url}everything?q=technology&sortBy=publishedAt&apiKey=${this.key}`,
    },
  ],
};

export default newsApi;
