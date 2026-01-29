import mongoose from 'mongoose'

const componentSchemas = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    allowedChildren: {
      type: [String],
      default: [],
      set: (v) => ((Array.isArray(v) && v.length === 0) || v === undefined ? [''] : v),
    },
    maxInstances: {
      type: Number,
      required: false,
    },
    schema: {
      type: [
        {
          name: { type: String, required: true },
          id: { type: String, required: true },
          description: { type: String, required: false },
          fieldType: { type: String, required: true },
          options: [
            {
              label: { type: String, required: true },
              value: { type: String, required: true },
            },
          ],
          uiType: { type: String, required: false },
          required: { type: Boolean, required: false },
          defaultValue: { type: mongoose.Schema.Types.Mixed, required: false },
          validation: {
            minLength: { type: Number, required: false },
            maxLength: { type: Number, required: false },
          },
        },
      ],
      required: true, // Ensures schema array is required
    },
  },
  {
    timestamps: true, // This will automatically add createdAt and updatedAt fields
  }
)

const ComponentSchemas = mongoose.model('ComponentSchemas', componentSchemas)
export default ComponentSchemas
