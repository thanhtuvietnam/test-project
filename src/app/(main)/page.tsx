import { categoryListOptions, movieListsOptions } from '@/api/endpoints/apimovieLists';
import { getQueryClient } from '@/api/get-query-client';
import { SecondSlider } from '@/components/molecules';
import { Carousel, SectionFilmOutline } from '@/components/organisms';
import { cn } from '@/lib/utils';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { JSX } from 'react';

export default async function Home(): Promise<JSX.Element> {
  const queryClient = getQueryClient();

  // await Promise.all(movieListsOptions.map((options) => queryClient.prefetchQuery(options)));
  const mainListOptions = categoryListOptions.filter((options) => options.queryKey[0] === 'danh-sach');
  //
  await Promise.all(mainListOptions.map((options) => queryClient.prefetchQuery(options)));
  // await Promise.all(categoryListOptions.map((options) => queryClient.prefetchQuery(options)));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={cn('group relative select-none rounded-3xl shadow-lg')}>
        <Carousel />
      </div>
      <SecondSlider />
      <SectionFilmOutline />
    </HydrationBoundary>
  );
}
