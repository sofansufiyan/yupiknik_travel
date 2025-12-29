
export interface Trip {
  id: string;
  title: string;
  location: string;
  price: number;
  date: string;
  duration: string;
  image: string;
  category: 'Mountain' | 'Beach' | 'Island' | 'Cultural';
  description: string;
  highlights: string[];
}

export interface Booking {
  id: string;
  tripId: string;
  customerName: string;
  email: string;
  phone: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  totalPrice: number;
  bookingDate: string;
}

export type ViewState = 'HOME' | 'DIRECTORY' | 'TRACKING' | 'BOOKING_SUCCESS';
