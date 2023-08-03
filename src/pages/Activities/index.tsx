import {
  ActivitesCardProps,
  ActivitiesCard,
} from '../../components/ActivitiesCard';
const popularList = [
  {
    title: 'Bungee Jump in Bhotekoshi',
    Duration: '18 days',
    original_price_US: 1100,
    discounted_price_US: 1000,
    review_count: 11,
    avg_star_count: 5,
  },
  {
    title: 'Mardi Himal Trek',
    Duration: '9 days',
    original_price_US: 1100,
    discounted_price_US: 1000,
    review_count: 16,
    avg_star_count: 5,
  },
  {
    title: 'Everest Base Camp',
    Duration: '8 days',
    original_price_US: 1100,
    discounted_price_US: 1000,
    review_count: 169,
    avg_star_count: 5,
  },
  {
    title: 'Everest Base Camp',
    Duration: '18 days',
    original_price_US: 1100,
    discounted_price_US: 1000,
    review_count: 11,
    avg_star_count: 5,
  },
  {
    title: 'Mardi Himal Trek',
    Duration: '9 days',
    original_price_US: 1100,
    discounted_price_US: 1000,
    review_count: 16,
    avg_star_count: 5,
  },
  {
    title: 'Everest Base Camp',
    Duration: '8 days',
    original_price_US: 1100,
    discounted_price_US: 1000,
    review_count: 169,
    avg_star_count: 5,
  },
] as ActivitesCardProps[];

export function Activities() {
  return (
    <div>
      <img src='/activitiesbg.png' />

      <ActivitiesCard props={popularList} />
    </div>
  );
}
