import { createContext, useContext, useState, ReactNode } from 'react';

interface BookingData {
  name: string;
  email: string;
  phone: string;
  deviceType: string;
  issue: string;
  date: string;
  time: string;
}

interface BookingContextType {
  bookingData: BookingData | null;
  setBooking: (data: BookingData) => void;
  clearBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  const setBooking = (data: BookingData) => setBookingData(data);
  const clearBooking = () => setBookingData(null);

  return (
    <BookingContext.Provider value={{ bookingData, setBooking, clearBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
