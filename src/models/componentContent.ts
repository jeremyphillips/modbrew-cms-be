import mongoose from "mongoose";

// Define the schema for component content
const componentContentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    componentName: {
      type: String,
      required: true,
    },
    schemaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ComponentSchema", // References the Component schema
      required: true,
    },
    props: {
      type: Map,
      of: mongoose.Schema.Types.Mixed, // Dynamic content for fields defined in component schema
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User model to track who created the content
      required: false,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Tracks who last updated the content
      required: false,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

// Create the model
const ComponentContent = mongoose.model(
  "ComponentContent",
  componentContentSchema,
);
export default ComponentContent;
