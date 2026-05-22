export const mainSiteLinks = {
  home: "https://querypie.ai",
  about: "https://querypie.ai/about-us",
  contact: "https://querypie.ai/contact-us",
  privacyPolicy: "https://querypie.ai/privacy-policy",
  termsOfService: "https://querypie.ai/terms-of-service",
  resources: "https://querypie.ai/resources",
} as const;

type ContactParams = {
  inquiry?:
    | "ai-consulting"
    | "download"
    | "demo-request"
    | "quote-request"
    | "technical-question"
    | "partnership"
    | "other";
  product?: string | string[];
};

export function buildContactUrl(params: ContactParams = {}) {
  const url = new URL(mainSiteLinks.contact);

  if (params.inquiry) {
    url.searchParams.set("inquiry", params.inquiry);
  }

  const products = Array.isArray(params.product)
    ? params.product
    : params.product
      ? [params.product]
      : [];

  for (const product of products) {
    url.searchParams.append("product", product);
  }

  return url.toString();
}
