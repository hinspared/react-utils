'use client';
import React from 'react';
import FlipCard from './components/FlipCard';

const Front = (
  <div>
    Front Text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
    vehicula ligula nec justo tincidunt, eget sollicitudin nunc fringilla.
    Vivamus ullamcorper eros et leo auctor, in luctus risus tempus.
  </div>
);

const Back = (
  <div>
    Back Text: Sed euismod eget nunc sit amet condimentum. Aliquam erat
    volutpat. Phasellus id tellus non purus lacinia tempus. Vestibulum et
    fermentum justo. Integer eget mauris nec velit bibendum tristique.
  </div>
);

export default function Home() {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const handleFlipCard = () => setIsFlipped((prev) => !prev);
  return (
    <main className="">
      <div className="w-3/5 ml-auto">
        <FlipCard isFlipped={isFlipped} front={Front} back={Back} />
      </div>
      <button
        className="px-3 py-2 shadow-xl rounded-lg"
        onClick={handleFlipCard}
      >
        change FlipCard
      </button>
    </main>
  );
}
