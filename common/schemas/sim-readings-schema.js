import { CommonReadingsSchema } from './common-readings-schema.js';

export const SIMReadingsSchema = new SimpleSchema({
  commonReading: {
    type: CommonReadingsSchema
  },
  mcc: {
    type: Number,
  },
  mnc: {
    type: Number,
  },
  carrierName: {
    type: String,
    optional: true,
  },
  countryCode: {
    type: String,
    optional: true
  }
})
