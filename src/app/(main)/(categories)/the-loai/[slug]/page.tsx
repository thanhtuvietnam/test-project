import { theLoaiListsOptions } from '@/api/endpoints/apimovieLists';
import { getQueryClient } from '@/api/get-query-client';
import { MoviesTemplate } from '@/components/templates';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { JSX } from 'react';

const TheLoaiPage = async (): Promise<JSX.Element> => {
  const queryClient = getQueryClient();
  await Promise.all(
    theLoaiListsOptions.map((options) => queryClient.prefetchQuery(options)),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MoviesTemplate />
    </HydrationBoundary>
  );
};
export default TheLoaiPage;
