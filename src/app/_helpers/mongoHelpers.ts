import clientPromise from '@/_lib/mongodb';
import { Collection, ObjectId } from 'mongodb';

export interface IEmployee {
  _id: ObjectId;
  department: string;
  name: string;
  image: string;
}
type PipelineStage =
  | {
      $match: { department: string };
    }
  | {
      $skip: number;
    }
  | {
      $limit: number;
    };

export async function getEmployees({
  query,
  page = 1,
  limit = 10,
}: {
  query?: string;
  page: number;
  limit: number;
}) {
  try {
    const client = await clientPromise;
    const db = client.db('gotham-capital');
    const employee = db.collection('employees');

    const skip = (page - 1) * limit;
    const pipeline: PipelineStage[] = [{ $skip: skip }, { $limit: limit }];

    if (query) {
      pipeline.unshift({
        $match: { department: query },
      });
    }
  
    const employees = await employee.aggregate(pipeline).toArray();

    return {
      results: employees,
    };
  } catch (e) {
    console.error(e);
  }
}
