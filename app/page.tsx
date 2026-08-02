import prisma from './lib/db';
import MapFilterItems from './components/MapFilterItems';
import ListingCard from './components/home/ListingCard';
import { Suspense } from 'react';
import LoadingSkeleton from './components/LoadingSkeleton';
import NoItem from './components/home/NoItem';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { unstable_noStore as noStore } from 'next/cache';
import { egyptHomes } from './lib/egyptHomes';

interface SearchParams {
  searchParams?: {
    filter?: string;
    country?: string;
    guestCounter?: string;
    roomCounter?: string;
    bathroomCounter?: string;
  };
  userId?: string | undefined;
}

async function getData({ searchParams, userId }: SearchParams) {
  noStore();
  try {
    const data = await prisma.home.findMany({
      where: {
        addedCategory: true,
        addedDescription: true,
        addedLocation: true,
        categoryName: searchParams?.filter ?? undefined,
        country: searchParams?.country ?? undefined,
        guests: searchParams?.guestCounter ?? undefined,
        bedrooms: searchParams?.roomCounter ?? undefined,
        bathrooms: searchParams?.bathroomCounter ?? undefined,
      },
      select: {
        photo: true,
        id: true,
        price: true,
        description: true,
        country: true,
        Favourite: {
          where: {
            userId: userId ?? undefined,
          },
        },
      },
    });

    if (data.length > 0) {
      return data;
    }
  } catch {
    // fall back to static Egyptian data below
  }

  return egyptHomes
    .filter((home) => !searchParams?.filter || home.categoryName === searchParams.filter)
    .filter((home) => !searchParams?.country || home.country === searchParams.country)
    .filter((home) => !searchParams?.guestCounter || home.guests === searchParams.guestCounter)
    .filter((home) => !searchParams?.roomCounter || home.bedrooms === searchParams.roomCounter)
    .filter((home) => !searchParams?.bathroomCounter || home.bathrooms === searchParams.bathroomCounter)
    .map((home) => ({
      photo: home.photo,
      id: home.id,
      price: home.price,
      description: home.description,
      country: home.country,
      Favourite: [],
    }));
}

export default function Home({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
    country?: string;
    guestCounter?: string;
    roomCounter?: string;
    bathroomCounter?: string;
  };
}) {
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <MapFilterItems />
      <Suspense key={searchParams?.filter} fallback={<LoadingSkeleton />}>
        <ShowRentalHomes searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

async function ShowRentalHomes({ searchParams }: SearchParams) {
  let user: any = null;

  try {
    const { getUser } = getKindeServerSession();
    user = await getUser();
  } catch {
    user = null;
  }

  const data: any[] = await getData({ searchParams, userId: user?.id });

  return (
    <>
      {data.length === 0 ? (
        <NoItem
          title="No Egypt stays matched this filter yet"
          description="Try another Egyptian location or list a new place with local prices"
        />
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 pb-10">
          {data.map((home) => (
            <ListingCard
              key={home.id}
              imagePath={home.photo as string}
              description={home.description as string}
              location={home.country as string}
              price={home.price as number}
              userId={user?.id}
              favouriteId={home.Favourite[0]?.id}
              isInFavouriteList={home.Favourite.length > 0 ? true : false}
              homeId={home.id}
              pathName="/" //revalidate only the homepage (actions)
            />
          ))}
        </div>
      )}
    </>
  );
}
