import { useEffect } from 'react';
import Button from '../components/Button';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ivory text-charcoal min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-8xl md:text-9xl font-serif text-terracotta mb-4">404</h1>
      <h2 className="text-3xl md:text-5xl font-serif mb-6 uppercase tracking-widest">THIS PAGE IS OFF THE MENU.</h2>
      <p className="text-warm-gray text-lg mb-10 max-w-md mx-auto font-light">
        "We couldn't find what you were looking for. Perhaps it was a seasonal special?"
      </p>
      <Button to="/" variant="primary">Back to Home</Button>
    </div>
  );
};

export default NotFound;
