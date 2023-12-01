import { toast, Toaster } from 'react-hot-toast';

export default function Body() {
  const showToast = () => {
    // Display a toast notification
    toast.error('Hello, this is a notification!');
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <Toaster/>
    </div>
  );
}
