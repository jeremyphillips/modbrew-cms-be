import mongoose, { Document, Schema, Model } from "mongoose";

export interface ComponentSchemaField {
  name: string;
  id: string;
  description?: string;
  fieldType: string;
  options: { label: string; value: string }[];
  uiType?: string;
  required?: boolean;
  defaultValue?: unknown;
  validation?: { minLength?: number; maxLength?: number };
}

export interface ComponentSchemaDocument extends Document {
  name: string;
  id: string;
  description?: string;
  category?: string;
  allowedChildren: string[];
  maxInstances?: number;
  fields: ComponentSchemaField[];
  createdAt: Date;
  updatedAt: Date;
}

const componentSchemas = new Schema<ComponentSchemaDocument>(
  {
    name: { type: String, required: true },
    id: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    allowedChildren: {
      type: [String],
      default: [],
      set: (v: string[] | undefined) =>
        (Array.isArray(v) && v.length === 0) || v === undefined ? [""] : v,
    },
    maxInstances: { type: Number },
    fields: {
      type: [
        {
          name: { type: String, required: true },
          id: { type: String, required: true },
          description: { type: String },
          fieldType: { type: String, required: true },
          options: [
            {
              label: { type: String, required: true },
              value: { type: String, required: true },
            },
          ],
          uiType: { type: String },
          required: { type: Boolean },
          defaultValue: { type: Schema.Types.Mixed },
          validation: {
            minLength: { type: Number },
            maxLength: { type: Number },
          },
        },
      ],
      required: true,
    },
  },
  { timestamps: true },
);

const ComponentSchemas: Model<ComponentSchemaDocument> = mongoose.model(
  "ComponentSchemas",
  componentSchemas,
);
export default ComponentSchemas;
