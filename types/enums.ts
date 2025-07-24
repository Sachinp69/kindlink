export enum UserRole {
  User = 'user',
  NGO = 'ngo',
  Admin = 'admin'
}

export enum Category {
  Food = 'food',
  Clothing = 'clothing',
  Money = 'money',
  Other = 'other'
}

export enum DonationStatus {
  Initiated = 'initiated',
  Delivered = 'delivered',
  Cancelled = 'cancelled'
}

export enum RequestStatus {
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Expired = 'expired'
}

export enum ReportType {
  Spam = 'spam',
  Fake = 'fake',
  Abuse = 'abuse'
}

export enum ReportStatus {
  Open = 'open',
  UnderReview = 'under_review',
  Closed = 'closed'
}
