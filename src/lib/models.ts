import mongoose, { Document, model, Model, Schema } from 'mongoose';
import mongodb from 'mongoose';



const Key = mongodb.model(
  'Key',
  new mongodb.Schema(
    {
      _id: {
        type: String,
        required: true,
      },
      user_id: {
        type: String,
        required: true,
      },
      hashed_password: String,
    } as const,
    { _id: false }
  )
);

const Session = mongodb.model(
  'Session',
  new mongodb.Schema(
    {
      _id: {
        type: String,
        required: true,
      },
      user_id: {
        type: String,
        required: true,
      },
      active_expires: {
        type: Number,
        required: true,
      },
      idle_expires: {
        type: Number,
        required: true,
      },
    } as const,
    { _id: false }
  )
);
