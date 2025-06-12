import Hero from '@/pages/Hero';
import Events from '@/pages/Events';
import Location from '@/pages/Location';
import Gifts from '@/pages/Gifts';
import Wishes from '@/pages/RSVP';

// Konten Utama Undangan Wisuda
export default function MainContent() {
  return (
    <>
      <Hero />
      <Events />
      <Location />
      <Gifts />
      <Wishes />
    </>
  );
}
