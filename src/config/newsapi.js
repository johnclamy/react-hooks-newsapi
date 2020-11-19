const newsApi = {
  key: process.env.REACT_APP_NEWSAPI_KEY,
  url: 'http://newsapi.org/v2/',
  qry: ['top-headlines', 'everything', 'sources'],
  get(news) {
    switch (news) {
      case 'top':
        return `${this.url}${this.qry[0]}?country=uk&apiKey=${this.key}`;
      case 'latest':
        return `${this.url}${this.qry[0]}?apiKey=${this.key}`;
      case 'uk':
        return `${this.url}${this.qry[0]}?country=uk&apiKey=${this.key}`;
      case 'bbc':
        return `${this.url}${this.qry[0]}?${this.qry[2]}=bbc-news&apiKey=${this.key}`;
      case 'biz':
        return `${this.url}${this.qry[1]}?q=business&sortBy=publishedAt&apiKey=${this.key}`;
      case 'showBiz':
        return `${this.url}${this.qry[1]}?q=entertainment&sortBy=publishedAt&apiKey=${this.key}`;
      case 'health':
        return `${this.url}${this.qry[1]}?q=health&sortBy=publishedAt&apiKey=${this.key}`;
      case 'sport':
        return `${this.url}${this.qry[1]}?q=sports&sortBy=publishedAt&apiKey=${this.key}`;
      case 'tech':
        return `${this.url}${this.qry[1]}?q=technology&sortBy=publishedAt&apiKey=${this.key}`;
      default:
        return `${this.url}${this.qry[0]}?country=uk&apiKey=${this.key}`;
    }
  },
};

export default newsApi;
