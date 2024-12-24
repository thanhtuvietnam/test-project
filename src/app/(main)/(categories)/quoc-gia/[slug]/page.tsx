import { quocGiaListsOptions } from '@/api/endpoints/apimovieLists';
import { getQueryClient } from '@/api/get-query-client';
import { MoviesTemplate } from '@/components/templates';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { JSX } from 'react';

const QuocgiaPage = async (): Promise<JSX.Element> => {
  const queryClient = getQueryClient();

  await Promise.all(quocGiaListsOptions.map((options) => queryClient.prefetchQuery(options)));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MoviesTemplate />
    </HydrationBoundary>
  );
};

export default QuocgiaPage;
