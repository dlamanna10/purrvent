"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const bookingSchema = z.object({
  ownerName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Too short"),
  dogName: z.string().min(1, "Required"),
  breed: z.string().min(1, "Required"),
  matted: z.enum(["Yes", "No"]),
  overweight: z.enum(["Yes", "No"]),
  underweight: z.enum(["Yes", "No"]),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  function onSubmit(data: BookingFormData) {
    console.log("Form submitted:", data);
    alert("Booking submitted!");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("ownerName")} placeholder="Your name" className="input" />
      <input {...register("email")} placeholder="Email" className="input" />
      <input {...register("phone")} placeholder="Phone" className="input" />
      <input {...register("dogName")} placeholder="Dog's name" className="input" />
      <input {...register("breed")} placeholder="Breed" className="input" />

      <div>
        <label className="block mb-1 text-gray-700">Is your dog matted?</label>
        <select {...register("matted")} className="input">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 text-gray-700">Is your dog overweight?</label>
        <select {...register("overweight")} className="input">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 text-gray-700">Is your dog underweight?</label>
        <select {...register("underweight")} className="input">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <textarea {...register("notes")} placeholder="Additional notes" className="input" rows={3} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded w-full transition"
      >
        {isSubmitting ? "Submitting..." : "Submit Booking"}
      </button>
    </form>
  );
}
