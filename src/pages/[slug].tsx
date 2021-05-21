import client from 'graphql/client';
import { useRouter } from 'next/dist/client/router';
import { GetStaticProps } from 'next';

import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries';
import PageTemplate, { PageTemplateProps } from 'templates/Pages';
import { GetPagesBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql';

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter();

  // pode retornar um loading, ou qq coisa enquanto está sendo criado
  if (router.isFallback) return null;
  return <PageTemplate heading={heading} body={body} />;
}

export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, {
    first: 3
  });

  const paths = pages.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPagesBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  });

  if (!page) return { notFound: true };

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  };
};
