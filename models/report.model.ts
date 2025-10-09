import mongoose , {Schema, model, models} from 'mongoose';
import { ReportStatus, ReportType } from '@/types/enums';
export interface IReport {
  reportedBy: mongoose.Schema.Types.ObjectId;
  targetId: mongoose.Schema.Types.ObjectId;
  type: ReportType;
  description?: string;
  status: ReportStatus;
  createdAt?: Date;
}
const reportSchema = new Schema<IReport>(
  {
    reportedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    targetId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: Object.values(ReportType), required: true },
    description: { type: String },
    status: { type: String, enum: Object.values(ReportStatus), default: ReportStatus.Open },
  },
  { timestamps: true }
);

export const Report = models?.Report || model<IReport>('Report', reportSchema);
