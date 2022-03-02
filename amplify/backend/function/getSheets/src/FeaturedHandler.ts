export interface INewsItemDB extends INewsItem {
  new_tab: string;
}

interface INewsItem {
  title: string;
  imgurl: string;
  href: string;
  href_text: string;
  description: string;
  expires: string;
}

interface INewsItemFormatted extends INewsItem {
  new_tab: boolean;
}

export class FeaturedHandler {
  private static isExpired(n: INewsItemDB) {
    return n.expires && new Date().getTime() > new Date(n.expires).getTime();
  }

  public static organize(news: INewsItemDB[]): INewsItemFormatted[] {
    const viable: INewsItemDB[] = news.filter(n => !this.isExpired(n)).filter(n => !!n.title);
    return viable.map(n => {
      const a = n as unknown as INewsItemFormatted;
      a.new_tab = !!parseInt(n.new_tab);
      return a;
    });
  }
}