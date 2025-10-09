//this model is for when a user donates to a donation request

import mongoose , {Schema, model, models} from 'mongoose';
import { DonationStatus } from '@/types/enums';

export interface IDonation {
  requestId: mongoose.Schema.Types.ObjectId;
  donorId: mongoose.Schema.Types.ObjectId;
  quantity: number;
  status: DonationStatus;
  proofImageUrl?: string;
  verified?: boolean;
  donatedAt?: Date;
}
const donationSchema = new Schema<IDonation>(
  {
    requestId: { type: Schema.Types.ObjectId, ref: 'DonationRequest', required: true },
    donorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    quantity: { type: Number, required: true },
    status: { type: String, enum: Object.values(DonationStatus) },
    proofImageUrl: { type: String },
    verified: { type: Boolean, default: false },
    donatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Donation = models?.Donation || model<IDonation>('Donation', donationSchema);
