import mongoose , {Schema, model, models} from 'mongoose';
import { RequestStatus,Category } from '@/types/enums';

export interface IDonationRequest {
  title: string;
  description: string;
  category: Category;
  quantity: number;
  location: string;
  urgencyScore?: number;
  status: RequestStatus;
  createdBy: mongoose.Schema.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
const donationRequestSchema = new Schema<IDonationRequest>(
  {
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, enum: Object.values(Category), required: true },
    quantity: { type: Number, required: true },
    location: { type: String, required: true },
    urgencyScore: { type: Number, default: 0 },
    status: { type: String, enum: Object.values(RequestStatus), default: RequestStatus.Pending},
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export const DonationRequest = models?.DonationRequest || model<IDonationRequest>('DonationRequest', donationRequestSchema);
