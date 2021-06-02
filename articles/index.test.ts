import { parseArticle, findArticle, findLatestArticles } from "./";

describe("parseArticle", () => {
  it("returns article from file", async () => {
    const article = await parseArticle(
      `${__dirname}/2011-08-20-a-new-beginning.md`
    );

    expect(article.title).toEqual("a new beginning");
    expect(article.category).toEqual("gbs");
    expect(article.tags).toContain("burning man");
    expect(article.description).toContain("So here we go");
    expect(article?.date).toEqual("2011-08-20T04:00:00.000Z");
    expect(article.body).toBeDefined();
  });
});

describe("findArticle", () => {
  it("finds an article by date and slug", async () => {
    const article = await findArticle({
      year: "2011",
      month: "08",
      day: "20",
      slug: "a-new-beginning",
    });

    expect(article).toBeDefined();
    expect(article?.title).toEqual("a new beginning");
    expect(article?.category).toEqual("gbs");
    expect(article?.tags).toContain("burning man");
    expect(article?.description).toContain("So here we go");
    expect(article?.date).toEqual("2011-08-20T04:00:00.000Z");
    expect(article?.body).toBeDefined();
  });

  it("returns nothing when article not found", async () => {
    const article = await findArticle({
      year: "bogus",
      month: "bogus",
      day: "bogus",
      slug: "bogus",
    });

    expect(article).not.toBeDefined();
  });
});

describe("findLatestArticles", () => {
  it("returns the five articles written most recently", async () => {
    const articles = await findLatestArticles();

    expect(articles.length).toBeGreaterThan(0);
  });
});
