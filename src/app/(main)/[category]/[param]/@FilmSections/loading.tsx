import CardSkeleton from '@/components/atoms/Skeleton/CardSkeleton';
import PageControllerSkeleton from '@/components/atoms/Skeleton/PageControllerSkeleton';
import '@/styles/CardSkeleton.css';

export default function Loading() {
  return (
    <div className="flex w-full flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-3">
      <div className="w-full grow space-y-4 lg:w-2/3">
        <div className="tw-flex border-b-bgdark/50 dark:border-b-bglight/20 border-b-[0.5px]">
          <span className="skeleton mt-1 mb-2 h-10 w-28 rounded-sm" />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 24 }).map((_, index) => (
            <div className="overflow-hidden bg-transparent p-1" key={index}>
              <CardSkeleton />
            </div>
          ))}
        </div>
        <PageControllerSkeleton />
      </div>
    </div>
  );
}
