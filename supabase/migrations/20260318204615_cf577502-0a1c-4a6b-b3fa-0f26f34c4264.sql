
-- Drop the overly permissive SELECT policy on bookings (shouldn't be public)
DROP POLICY "Bookings viewable by email" ON public.event_bookings;

-- The INSERT WITH CHECK (true) is intentional for public booking forms
-- but let's restrict SELECT to prevent data exposure
-- No one needs to read all bookings from the client
